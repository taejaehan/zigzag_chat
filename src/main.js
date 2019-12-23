import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import list from './components/List.vue'
import room from './components/Room.vue'
import chat_data from './dummy_data/chats.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
	{
		path:'/list', name:'List', components:{
			default : list
		}
	},
	{
		path:'/room/:id',name:'Room', components:{
			default : room
		},
	},
]

const router = new VueRouter({
	routes:routes,
	mode:'history'
})

new Vue({
	data: chat_data,
	render: h => h(App),
	router:router,
}).$mount('#app')
