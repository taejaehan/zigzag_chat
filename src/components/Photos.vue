<template>
	<div class="photo-wrap">
		<div>{{ title }}</div>
		<div @click="addItem(photo)" class="photo-list" v-for="photo in photos" :key="photo.id">
			<img :src="photo.thumb" >
		</div>
	</div>
</template>

<script>
import photo_data from '../dummy_data/photos.js'

export default {
	name: 'photos',
	props: ['title'],
	data() {
		return { 
			photos: photo_data
		}
	},
	methods: {
		addItem(photo){
			this.messages = this.$root.$data.messages
			this.id = this.$route.params.id 	
			this.thumb = photo.thumb;
			this.messages[this.id].push({
				user_id: 0,
				msg : null,	
				file : this.thumb,
			})
			setTimeout(function(){ 
				let chat_wrap = document.getElementById('chat_wrap')
				chat_wrap.scrollTo(0,chat_wrap.scrollHeight - chat_wrap.offsetHeight)
			}, 100);

		}
	}
}
</script>
<style>
	.photo-wrap{
		width:96%;
		padding: 0 2%;
		white-space:nowrap;
		background-color:#5b36ac;
		color:white;
		overflow-x: scroll;	
	}
	.photo-list {
		display:inline-block;
		margin:5px;	
	}
	.photo-list img{
		width:56px;
		height: 56px;
	}
</style>
