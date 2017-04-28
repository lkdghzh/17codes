<style scope>
.root-page{
	height: 100%;
	font-family: Lato,"PingFang SC","Microsoft YaHei",sans-serif;
}
.bar {
	height: 3px;
	background-color:#34352C;
	/*width: 100%;
	position: fixed;
	top:0px;*/
}
.section-body{
	height:100%;
	background:#EFF0DC;
}
.sidebar{
	height:100%;
	width:320px;
	background:#34352C;
	position: fixed;
	top:0px;
	right: 0px;
	/*right:-320px;*/

	text-align: center;
}
.sidebar .author-img{
	width:110px;
	height:110px;
	border-radius: 55px;
	margin:0px auto;
	background-image: url("http://images.cnblogs.com/cnblogs_com/leee/801892/o_like.png");
	background-size: cover;
	cursor: pointer;
}
.sidebar .menu{
	margin: 70px auto;
	width: 300px;
}
.sidebar .menu ul{
	list-style-type: none;
	overflow: hidden;
}
.sidebar .menu ul li{
	float: left;
	border-bottom: 1px solid silver;
	color: #fff;
	margin-left:10px;
	cursor: pointer;
}
.sidebar .contentTable{
	margin: 70px auto;
	width: 300px;
	color: white;
}
.overview .author-name{
	margin: 15px auto;
	color: #f5f5f5;
}
</style>
<template>
	<div class="root-page" >
		<div class="bar"></div>
		<aside class="sidebar">
			<div class="menu">
				<ul >
					<li @click="toogleMark(0)">Table Of Contents</li>
					<li @click="toogleMark(1)">Overview</li>
				</ul>
			</div>
			<div class="contentTable" v-if="markIndex === 0">
				<div class="category">
					<ul >
						<li @click="switchCategory(0)">Javascript</li>
						<li @click="switchCategory(1)">c#</li>
					</ul>
				</div>
			</div>
			<div class="overview" v-if="markIndex === 1">
				<div class="author-img"></div>
				<p class="author-name">李&nbsp;可</p>
			</div>
		</aside>
		<section class="section-body">
		</section>
	</div>
</template>
<script>
import './src/css/bootstrap.min.css'
import './src/css/common.css'

export default {
	data: function () {
		return {
			markIndex:1,
		}
	},
	methods:{
		toogleMark(markInx){
			this.markIndex=markInx;
		},
		switchCategory(categoryInx){
			!categoryInx?alert('c1'):alert('c2');
		}
	}

}
</script>