<template>
	<div id="post">
		<header class="responsive">
			<nav class="w3-bar w3-green">
				<div class="w3-bar-item w3-left nav-item">
					<router-link :to="'/'" class="w3-button"><img class="nav-image" src="../assets/img/logo.png"></router-link>
				</div>
				
				<div class="w3-bar-item w3-dropdown-hover nav-item w3-right">
					<a class="w3-button"><img class="nav-image" src="../assets/img/lang.png"></a>
					<div class="w3-dropdown-content w3-bar-block w3-card-4 dropdown">
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangPost(1)">Русский</button>
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangPost(2)">Қазақша</button>
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangPost(3)">English</button>
					</div>
				</div>
				<div class="w3-bar-item w3-right nav-item">
					<router-link :to="'/reg'" class="w3-button"><img class="nav-image" src="../assets/img/user.png"></router-link>
				</div>
			</nav>
		</header>
		<div class="w3-container" ref="post">
			<section class="w3-panel w3-green w3-round w3-border panel" v-if="langIndex === 1">
				<h1>{{ post.ru.title }}</h1>
				<p>{{ post.ru.description }}</p>
				<p>{{ post.ru.body }}</p>
				<router-link class="w3-button w3-white w3-right" :to="'/'">На главную</router-link>
			</section>
			<section class="w3-panel w3-green w3-round w3-border panel" v-if="langIndex === 2">
				<h1>{{ post.kz.title }}</h1>
				<p>{{ post.kz.description }}</p>
				<p>{{ post.kz.body }}</p>
				<router-link class="w3-button w3-white w3-right" :to="'/'">Бастыға</router-link>
			</section>
			<section class="w3-panel w3-green w3-round w3-border panel" v-if="langIndex === 3">
				<h1>{{ post.en.title }}</h1>
				<p>{{ post.en.description }}</p>
				<p>{{ post.en.body }}</p>
				<router-link class="w3-button w3-white w3-right" :to="'/'">Home</router-link>
			</section>
		</div>
	</div>	
</template>

<script>
import  { store } from '../main.js'
export default {
	data() {
		return {
			langIndex: store.state.langIndex,
			post: {
				userId: null,
				id: null,
				catId: null,
				ru: {
					category: null, title: null, description: null, body: null
				},
				kz: {
					category: null, title: null, description: null, body: null
				},
				en: {
					category: null, title: null, description: null, body: null
				},
			}
		}
	},
	methods: {
		switchLangPost(n) {
			this.langIndex = n
			store.setLangAction(n)
		}
	},
	created() {
		console.log("langIndex" + this.langIndex)
		this.$http.get("https://my-json-server.typicode.com/fans-alphaandomega/fans-alphaandomega.github.io/posts/" + this.$route.params.id)
		.then(response => response.json(), error => console.log(error))
		.then(json => this.post = json, error => console.log(error))
	}
}
</script>
