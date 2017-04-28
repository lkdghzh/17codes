<style scope>
.root-page{
	height: 100%;
}
.nav-bar {
	min-height: 50px;
	height: 5.5%;
	background-color:#C9CABB;
}
/*color0: #F5F6EB__RGB(245,246,235)
color1: #EFF0DC__RGB(239,240,220)
color2: #C9CABB__RGB(201,202,187)
color3: #34352C__RGB(52,53,44)*/
.nav-container {
	margin: 0px auto;
	height: 100%;
	width: 980px;
	border-radius: 5px;
	background:#F5F6EB;
}
.aside-menu{
	height:94.5%;
	width: 20%;
	background:#34352C;
	float: left;
}
.article-body{
	height:94.5%;
	width: 80%;
	background:#EFF0DC;
	float: right;
}
</style>

<template>
	<div class="root-page" >
		<nav class="nav-bar">
			<div class="nav-container">
				<div class="nav-header">
					<a class="nav-brand" href="#">17Codes</a>
					<!--<ul class="nav navbar-nav">
						<li>
							<form class="navbar-form ">
								<div class="input-group">
									<input type="text" placeholder="文章搜索" class="form-control" />
									<span class="input-group-btn">
										<button class="btn btn-default" type="button">
											Go!
										</button>
									</span>
								</div>
							</form>
						</li>
					</ul>-->
				</div>
			</div>
		</nav>
		<aside class="aside-menu">
			ul>li*5
		</aside>
		<article class="article-body"></article>
	</div>
</template>

<script>
import './src/css/bootstrap.min.css'
import './src/css/common.css'

export default {
	data: function () {
		return {}
	},
	methods: [

	]
}
</script>