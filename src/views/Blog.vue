<template>
	<div id="blog">
		<header class="responsive">
			<nav class="w3-bar w3-green">
				<div class="w3-bar-item w3-left nav-item">
					<router-link :to="'/'" class="w3-button"><img class="nav-image" src="../assets/img/logo.png"></router-link>
				</div>	
				<div class="w3-bar-item w3-dropdown-hover nav-item w3-right">
					<a class="w3-button"><img class="nav-image" src="../assets/img/lang.png"></a>
					<div class="w3-dropdown-content w3-bar-block w3-card-4 dropdown">
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangBlog(1)">Русский</button>
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangBlog(2)">Қазақша</button>
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangBlog(3)">English</button>
					</div>
				</div>
				<div class="w3-bar-item w3-right nav-item">
					<router-link :to="'/reg'" class="w3-button"><img class="nav-image" src="../assets/img/user.png"></router-link>
				</div>
			</nav>
		</header>
		<div class="w3-container" ref="blog">
			<paginate
				class="paginate-list"
				name="blogs"
				:list="posts"
				:per="3"
				tag="div"
			>
				<section class="w3-panel w3-green w3-round w3-border panel" v-for="blog in paginated('blogs')" v-bind:key="blog.id" v-show="langIndex === 1">
					<h2>{{ blog.ru.title }}</h2>
					<p>{{ blog.ru.description }}</p>
					<p>id: {{ blog.id }}</p>
					<router-link :to="'/post/' + blog.id" class="w3-button w3-white w3-right">Читать всю статью...</router-link>
				</section>
				<section class="w3-panel w3-green w3-round w3-border panel" v-for="blog in paginated('blogs')" v-bind:key="blog.id" v-show="langIndex === 2">
					<h2>{{ blog.kz.title }}</h2>
					<p>{{ blog.kz.description }}</p>
					<p>id: {{ blog.id }}</p>
					<router-link :to="'/post/' + blog.id" class="w3-button w3-white w3-right">Толық мақаланы оқу...</router-link>
				</section>
				<section class="w3-panel w3-green w3-round w3-border panel" v-for="blog in paginated('blogs')" v-bind:key="blog.id" v-show="langIndex === 3">
					<h2>{{ blog.en.title }}</h2>
					<p>{{ blog.en.description }}</p>
					<p>id: {{ blog.id }}</p>
					<router-link :to="'/post/' + blog.id" class="w3-button w3-white w3-right">Read full article...</router-link>
				</section>
			</paginate>

			<paginate-links
				class="w3-green w3-panel w3-center w3-round panel"
				:async="true"
				for="blogs"
				:show-step-links="true"
				:step-links="{
					prev: '<<', next: '>>'
				}"
				:classes="{
					'ul': 'pagination',
					'ul > li': 'page-item',
					'ul > li > a': 'page-link'
				}" 
			></paginate-links>
		</div>
	</div>	
</template>

<script>
import { store } from '../main.js'
export default {
	data() {
		return {
			langIndex: store.state.langIndex,
			posts: [],
			paginate: ['blogs'],
		}
	},
	methods: {
		switchLangBlog(n) {
			this.langIndex = n
			store.setLangAction(n)
		}
	},
	created(){
		this.$http.get("https://my-json-server.typicode.com/fans-alphaandomega/fans-alphaandomega.github.io/posts")
		.then(response => response.json(), error => console.log(error))
		.then(json => this.posts = json, error => console.log(error));
	}
}
</script>

<style>
	
</style>

