import Vue from 'vue';
import VueRouter from 'vue-router';
import Blog from '../views/Blog.vue';
import Post from '../views/Post.vue';
import SignUp from '../views/SignUp.vue';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/',
		component: Blog 
	},
	{ 
		path: '/post/:id',
		component: Post
	},
	{
		path: '/reg',
		component: SignUp
	}
];

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
});

export default router;