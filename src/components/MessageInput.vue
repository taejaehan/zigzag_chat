<template>
	<div class="input_wrap">
		<input placeholder="메세지를 입력하세요"  id="input_msg" v-model="msg" />
		<button id="btn_send" @click="sendMessage()"></button>
	</div>
</template>

<script>
//import { Post } from '../api/index'
export default {
	name: 'photos',
	data() {
		return { 
			loading: false, 
			msg: '',
			photos: [
				
			] 
		}
	},
	methods: {
		sendMessage(){
			if(this.msg == "") return;
			this.messages = this.$root.$data.messages
			this.id = this.$route.params.id 	
			this.messages[this.id].push({
				user_id: 0,
				msg : this.msg,	
				file : null,
			})
			this.msg = ''
			setTimeout(function(){ 
				let chat_wrap = document.getElementById('chat_wrap')
				chat_wrap.scrollTo(0,chat_wrap.scrollHeight - chat_wrap.offsetHeight)
			}, 100);
		}
	}
}
</script>
<style>
	.input_wrap{
		position:absolute;
		bottom:20px;
		height:50px;
		width: 100%;
	}
	.input_wrap input{
		resize: none;
		padding:0;
		margin:0;
		border:none;
		display: inline-block;
		height: 18px;
		width: 80%;
		max-width: 269px;
		vertical-align: top;
		border-radius: 25px;
		box-shadow: 0 2px 4px 0 var(--black-10);
		background-color: #fff;
		padding:16px;
		font-weight: 500;
		
	}
	.input_wrap input::placeholder{
		color: #74747e;
	}
	.input_wrap button{
		display: inline-block;
		width: 50px;
		height: 50px;
		margin:0 0 0 12px;
		vertical-align: top;
	}

	#btn_send{
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-color: #5b36ac;
		background-image: url('../assets/imgs/img-send.png');
		background-repeat: no-repeat;
		background-position: center;
		color:#5b36ac;
	}

</style>
