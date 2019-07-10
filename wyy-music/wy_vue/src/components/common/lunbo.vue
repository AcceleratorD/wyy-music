<template>
  	<div class="lunbo">
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="(item,index) in banner" :key="index">
				<a href="javascript:;" >
					<img :src="require('../../assets/'+item)" alt="" class="img">
				</a>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
export default {
	data () {
		return {
			banner:[
				'banner1.png',
				'banner2.png',
				'banner3.png',
				'banner4.png',
				'banner5.png',
				'banner6.png',
				'banner7.png',
				'banner8.png'
			]
		}
	},
}
</script>
<style>
.lunbo{margin:0px 10px;}
.lunbo .img {
	width: 100%;
	border-radius: 5px;
}
.lunbo .mint-swipe {
	height:172px;
}
.lunbo .mint-swipe-indicators{
    bottom: 15px;
}
.lunbo .mint-swipe-indicator{
	background-color:aqua;
}
.lunbo .mint-swipe-indicator.is-active{
	background:orange;
	opacity: 0.8;
}
</style>