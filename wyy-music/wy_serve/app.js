//1:引入二个模块  express mysql
const express=require("express");
const mysql=require("mysql");
const bodyParser=require("body-parser")
//2:创建连结池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:3306,
    database:"wy",
    connectionLimit:15
})
//3:创建express对象
var server=express();
//4.指定静态资源目录
server.use(express.static("public"))

server.use(bodyParser.urlencoded({
	extended:false
}));
//5.处理跨域请求
const cors=require("cors")
server.use(cors({
    origin:[
        "http://127.0.0.1:8080",
        "http://localhost:8080"
    ],
    credentials:true//让二次请求时带上一次请求的cookie
}))
//6.session
const session=require("express-session");
server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
}))

//7:绑定监听端口
server.listen(3000);

//8.接收用户请求
//功能一:登录
server.post("/login",(req,res)=>{
    //1.接受脚手架参数 phone upwd
    var phone=req.body.phone;
    var upwd=req.body.upwd;
    //2.sql:
    var sql=`SELECT uid FROM wy_user WHERE phone=${phone} AND upwd=${upwd}`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"手机号或密码错误"});
        }else{
            req.session.uid=result[0].uid;
            res.send({code:1,msg:"登陆成功 "});
        }
    });
});
//功能二:注册
server.post("/reg",(req,res)=>{
    //1.接受脚手架参数 phone upwd
    var phone=req.body.phone;
    var upwd=req.body.upwd;
    //sql:
    var sql="INSERT INTO wy_user SET ?";
    pool.query(sql,[req.body],(err,result)=>{
        if(err) throw err;
        if (result.affectedRows>0){
            // 完成注册后自动保存session.uid
            var x="SELECT uid FROM wy_user WHERE phone=? AND upwd=?";
            pool.query(x,[phone,upwd],(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                    req.session.uid=result[0].uid;
                    res.send({code:1,msg:'注册成功'});
                }
            });
		}else{
            res.send({code:1,msg:'注册失败'});
        }
    });
});
//功能三:查询指定用户是否登录
server.get("/islogin",(req,res)=>{
    //参数
	var uid = req.session.uid;//之前登录成功时传的用户uid
	//sql
	var sql = "SELECT uname,uimg FROM wy_user WHERE uid = ?";
	pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"未登录"})
        }else{
            res.send({code:1,msg:"已登录",data:result})
        }
	});
})
//功能四:退出登录
server.get("/logout",(req,res)=>{
    // sessionStorage.clear();
    req.session.uid=null;
    if(req.session.uid==null){
        res.send({code:1,msg:"已退出"})
    }else{
        res.send({code:-1,msg:"退出失败"})
    }
})
//功能五:查询我的歌单
server.get("/msheet",(req,res)=>{
    var uid = req.session.uid;
	var sql = "SELECT lid,img,lname,count,ids FROM wy_sheet WHERE uid = ?";
	pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"获取失败"})
        }else{
            res.send({code:1,msg:"获取成功",data:result})
        }
	});
})
//功能六:删除我的歌单
server.get("/del",(req,res)=>{
    var lid = req.query.lid;
	var sql = "DELETE FROM wy_sheet WHERE lid = ?";
	pool.query(sql,[lid],(err,result)=>{
        if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"清除成功"})
		}else{
			res.send({code:-1,msg:"清除失败"})
		}
	});
})
//功能七:朋友
server.get("/friendmsg",(req,res)=>{
	var sql = "SELECT name,number,text,img FROM wy_friend";
	pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"获取失败"})
        }else{
            res.send({code:1,msg:"获取成功",data:result})
        }
	});
})
//功能八:查询歌曲
server.get("/music",(req,res)=>{
    //参数
	var sql = "SELECT path FROM wy_music WHERE id = 1";
	pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"获取失败"})
        }else{
            res.send({code:1,msg:"获取成功",data:result})
        }
	});
})
//功能九:查询推荐歌单
server.get("/tsheet",(req,res)=>{
    // res.send({code:-1,msg:"获取失败2"})
    //参数
    var tid=req.query.tid;
    //以及添加热度推荐功能
	var sql = "SELECT simg,uimg,sname,suname,detail,ids FROM wy_tjsheet WHERE tid = ?";
	pool.query(sql,[tid],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"获取失败"})
        }else{
            res.send({code:1,msg:"获取成功",data:result})
        }
	});
})
/*
//功能三:查询指定用户歌单信息
server.get("/mymusic",(req,res)=>{
	//参数
	var uid = req.session.uid;//之前登录成功时传的用户uid
	//sql
	var sql = "SELECT id,img,uid,price,count FROM wy_cart WHERE uid = ?";
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		res.send({code:1,msg:"查询成功",data:result})
	});
	//json
})
//功能四:删除指定购物车中一个商品
server.get("/del",(req,res)=>{
  	//参数:id
  	var id = req.query.id;
 	 //sql:
 	 var sql = "DELETE FROM xz_cart WHERE id = ?";
  	//json
  	pool.query(sql,[id],(err,result)=>{
    	if(err)throw err;
    	console.log(result);//cmd中
    	res.send({code:1,msg:"删除成功"})
  	})
})
//功能五:清空购物车
server.get("/delAll",(req,res)=>{
	var ids=req.query.ids;
	var sql = `DELETE FROM xz_cart WHERE id IN(${ids})`;
    pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"清除成功"})
		}else{
			res.send({code:-1,msg:"清除失败"})
		}
	})
})
*/


/*
//功能二:商品列表
server.get("/product",(req,res)=>{
    //1:参数 pno pageSize
    var pno=req.query.pno;
    var ps=req.query.pageSize;
    //默认值
    if(!pno){pno=1}
    if(!ps){ps=4}
    //2:sql
    var sql="SELECT lid,title,price FROM xz_laptop LIMIT ?,?";
    var offset=(pno-1)*ps;
    ps=parseInt(ps);
    pool.query(sql,[offset,ps],(err,result)=>{
        if (err) throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
*/