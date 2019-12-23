<template>
<div class="list-wrap">
<div class="chat" v-for="(chat, key) in chats" :key="key">
	<router-link :to="{ name: 'Room', params: { id: key } }">
		<div class="profile-wrap">
			<img class="profile" :src="users[chat.user_id].profile" >
		</div>
		<div class="contents">
			<p class="user-name">{{users[chat.user_id].user_name}}</p>
			<p class="last-m">{{chat.last_m}}</p>
		</div>
		<div class="info">
			<p class="last-t">{{chat.last_t}}</p>
			<p v-if="chat.unread_num>0" class="unread-num">{{chat.unread_num}}</p>
		</div>
	</router-link>
</div>
</div>
</template>

<script>
export default {
	name: 'list',
	created () {
		this.fetchData()
	},
	mounted(){
		this.$emit('change_title', "채팅", 'list')
	},
	methods: {
		fetchData () {
			this.chats = this.$root.$data.chats 	
			this.users = this.$root.$data.users 					
		}
	}
}
</script>
<style>
	.list-wrap{
		height: 601px;
		position:relative;
		margin:44px 0 0 0;
		overflow-y: scroll;
		padding:10px 0;
	}
	.list-wrap .chat{
		width:100%;
		height: 74px;
		padding:9px 0;
	}
	.list-wrap .chat a{
		width:100%;
		height: 100%;
		display: block;
	}
	.list-wrap .contents p {
		text-align: left;
		margin:5px 0;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden; 
	}
	.list-wrap .profile-wrap, .list-wrap .contents, .list-wrap .info{
		display: inline-block;
		vertical-align: middle;
	}
	.list-wrap .profile-wrap{

		width:20%;
	}
	.list-wrap .profile-wrap .profile{
		margin-top:9px;
	}
	.list-wrap .contents{
		width:66%;
		padding:0 2%;
	}
	.list-wrap .contents .user-name{
		font-size: 16px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.2px;
		color: #464052;
	}
	
	.list-wrap .contents .last-m{
		font-size: 13px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.1px;
		color: #a4a6b0;
	}
	.list-wrap .info{
		width:10%;
	}
	.list-wrap .info .last-t{
		width: 29px;
		opacity: 0.4;
		font-size: 11px;
		font-weight: 500;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: right;
		color: #363a42
	}
	.list-wrap .info .unread-num{
		width: 18px;
		height: 18px;
		border-radius: 10.5px;
		background-color: #5b36ac;
		font-family: AppleSDGothicNeo;
		font-size: 10px;
		font-weight: bold;
		line-height: 20px;
		text-align: center;
		color:#fff;
	}
	.list-wrap .profile{
		width:56px;
		height: 56px;
		border-radius: 28px;
		background-color: #d8d8d8;
	}
</style>

