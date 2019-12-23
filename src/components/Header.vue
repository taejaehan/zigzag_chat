<template>
	<div id="nav_wrap" class="nav">
		<div class="left">
			<button class="menu"></button>
			<button class="back" v-on:click="goBack"></button>
		</div>
		<H1 class="title" id="nav_title"></H1>
		<div class="right">
			<button class="people"></button>
			<button class="photo" v-on:click="togglePhotos" ></button>
			<button class="search"></button>
		</div>
		<photos class="photos" ></photos>
	</div>				
</template>
 
<script>
import photos from '../components/Photos.vue'

export default {
	name: 'appHeader',
	components: {
		photos
	},
	methods: {
		goBack(){
			this.$router.go(-1)
		},
		togglePhotos(){
			document.getElementById("app").classList.toggle("show-photo");
		}
	}
}
</script>
 
<style scoped>
	.nav{
		background-color:#5b36ac;
		color:white;
		position:absolute;
		top:0;
		width:100%;
		height: 44px;
	}
	.nav button{
		width:26px;
		height: 26px;
		border:none;
		background:none;
		background-repeat: no-repeat;
		background-position: center
	}
	.nav .menu{
		background-image: url('../assets/imgs/menu.png');
	}
	.nav .people{
		background-image: url('../assets/imgs/rectangle.png');
	}
	.nav .back{
		background-image: url('../assets/imgs/img-back.png');
	}
	.nav .photo{
		margin-right:8px;
		background-image: url('../assets/imgs/img-upload.png');
	}
	.nav .search{
		background-image: url('../assets/imgs/img-search.png');
	}

	.nav .left{
		z-index: 1;
		position: absolute;
		left:12px;
		top:8px;
	}
	.nav .right{
		z-index: 1;
		position: absolute;
		right:12px;
		top:8px;
	}
	.nav .title{
		position: absolute;
		top:10px;
		margin:0;
		text-align: center;
		width:100%;
		font-size:17px;
	}
	.list .menu, .list .people {
		display: inline-block;
	}
	.list .back, .list .photo, .list .search {
		display: none;
	}
	.room .menu, .room .people {
		display: none;
	}
	.room .back, .room .photo, .room .search {
		display: inline-block;
	}

	.photos {
		display: none;
		position: absolute;
		top:0;
		height: 68px;
	}
	.show-photo .photos {
		display: block;
		animation-name: show-photo;
		animation-duration:0.5s;
		animation-duration: leaner;
		animation-iteration-count:1;
		animation-direction:alternate;
		animation-fill-mode: forwards;
	}
	@-webkit-keyframes show-photo {
		0% {
			top:0px;
			opacity: 0;
		}
		100% {
			top:44px;
			opacity: 1;
		}
	}
</style>
