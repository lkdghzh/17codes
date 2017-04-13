<template>
	<div id="app" class="container-fluid">
		<div class="row">
			<div class="pull-left logo">
				口语评分系统
			</div>
			<div class="pull-right">
				<span>管理员</span>
				<a href="javascript:void(0);">退出</a>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
// require('./css/bootstrap.min.css');
// require('./css/common.css');

export default {
	data: function(){
		return {}
	},
	methods: [

	]
}
</script>