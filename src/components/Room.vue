<template>
	<div class="room-wrap">
		<div id="chat_wrap" class="chat-wrap">
			<div class="msg-wrap" :class="[msg.user_id ? 'from' : 'mine']" v-for="msg in messages[id]" :key="msg.id">
				<p v-if="msg.msg != null" class="text">{{ msg.msg }}</p>
				<img v-if="msg.file != null" class="file" :src="msg.file" >
			</div>
		</div>
		<messageInput></messageInput>
	</div>
</template>

<script>
import messageInput from '../components/MessageInput.vue'
export default {
	name: 'room',
	components: {
		messageInput
	},
	created () {
		this.fetchData()
	},
	mounted(){
		this.$emit('change_title', this.users[this.chats[this.id].user_id].user_name, 'room')
		this.chats[this.id].unread_num = 0;
	},
	methods: {
		fetchData () {
			this.chats = this.$root.$data.chats
			this.messages = this.$root.$data.messages
			this.id = this.$route.params.id 
			this.users = this.$root.$data.users		

		}
	}
}
</script>
<style>
	.chat-wrap{
		height: 533px;
		position:relative;
		margin:44px 0 70px 0;
		overflow-y: scroll;
		padding : 10px 16px;
	}
	.chat-wrap .msg-wrap{
		height: 41px;
		display: table;
	}
	.chat-wrap .msg-wrap .text{
		display: block;
		border-radius: 12px;
		box-shadow: 0 2px 4px 0 var(--black-10);
		background-color: #fff;
		padding:12px;
		word-break: break-all;

	}
	.chat-wrap .msg-wrap .file{
		width:200px;
		height:200px;
		border-radius: 12px;
	}
	.chat-wrap .from .text{
		margin:5px 0;
		font-size: 14px;
		font-weight: 600;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.1px;
		color: #363a42;
		text-align: left;
	}
	.chat-wrap .mine{
		width: auto;
		margin-right: 0px;
		margin-left: auto;
	}
	.chat-wrap .mine .text{
		background-color: #5b36ac;
		color:#fff;
		opacity: 1;
		font-weight: bold;
		text-align: right;
	}
	.show-photo .chat-wrap{
		animation-name: down-chat;
		animation-duration:0.5s;
		animation-duration: leaner;
		animation-iteration-count:1;
		animation-direction:alternate;
		animation-fill-mode: forwards;
	}
	
	@-webkit-keyframes down-chat {
		0% {
			height: 533px;
			margin:44px 0 70px 0;

		}
		100% {
			height: 465px;
			margin:112px 0 14px 0;
		}
	}
</style>

