<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, ul, li, dd, dl, p, input, button, ol, pre{
	margin:0;
	padding:0;
}
ul{
	list-style: none;
}
img{
	vertical-align: middle;
}
a{
	text-decoration: none;
}
a:hover,
a:active{
	color:#f46262;
}
input, button{
	border:none;
	outline:none;
}
body{
	font:1em "poppin","Microsoft YaHei", "SimSun", "SimHei", Arial;
	color: #000;
	/* white-space: nowrap; */
	word-break: keep-all;
	text-overflow: ellipsis;
}
.clear:after{
	content:"";
	display:block;
	clear:both;
}
</style>
