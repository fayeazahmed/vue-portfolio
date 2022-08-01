<template>
	<div class="container main">
		<Nav />
		<div class="home">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Nav from "./components/Nav.vue"

export default {
	name: "App",
	components: {
    Nav
  },
};
</script>

<style scope>
	.home {
		background: #fbffe2;
		padding: 7px 43px;
		min-height: calc(100vh - 61px);
	}
</style>
