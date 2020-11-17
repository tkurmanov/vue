<template>
	<div id="signup">
		<header class="responsive">
			<nav class="w3-bar w3-green">
				<div class="w3-bar-item w3-left nav-item">
					<router-link :to="'/'" class="w3-button"><img class="nav-image" src="../assets/img/logo.png"></router-link>
				</div>
				<div class="w3-bar-item w3-dropdown-hover nav-item w3-right">
					<a class="w3-button"><img class="nav-image" src="../assets/img/lang.png"></a>
					<div class="w3-dropdown-content w3-bar-block w3-card-4 dropdown">
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangReg(1)">Русский</button>
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangReg(2)">Қазақша</button>
						<button class="w3-bar-item w3-green lang-btn" v-on:click="switchLangReg(3)">English</button>
					</div>
				</div>
				<div class="w3-bar-item w3-right nav-item">
					<router-link :to="'/reg'" class="w3-button"><img class="nav-image" src="../assets/img/user.png"></router-link>
				</div>
			</nav>
		</header>
		<div class="w3-container">
			<FormulateForm class="w3-panel w3-green w3-round w3-border panel" v-model="formValues" @submit="handleSubmit" v-if="langIndex === 1">
				<FormulateInput 
					name="name" 
					label="Имя" 
					validation="required" 
				/>
				<FormulateInput 
					name="email" 
					label="E-mail" 
					validation="required|email" 
				/>
				<FormulateInput 
					name="username"
					label="Логин" 
					validation="required" 
				/>
				<FormulateInput
					type="password"
					name="password" 
					label="Пароль" 
					validation="required" 
				/>
				<FormulateInput
					name="favoriteLanguage"
					label="Любимая категория"
					type="select"
					:options="{Sport: 'Спорт', Kino: 'Кино', Criminal: 'Криминал', Politics: 'Политика'}"
				/>
				<FormulateInput
					style="margin-top: 15px"
					name="acceptTerms"
					type="checkbox"
					label="Я принимаю условия Лицензионного Соглашения"
					validation="required"/>
				<FormulateInput
					type="submit" 
					label="Зарегистрироваться" />
			</FormulateForm>
			
			<FormulateForm v-model="formValues" class="w3-panel w3-green w3-round w3-border panel" @submit="handleSubmit" v-if="langIndex === 2">
				<FormulateInput 
					name="name" 
					label="Аты" 
					validation="required" 
				/>
				<FormulateInput 
					name="email" 
					label="E-mail" 
					validation="required|email" 
				/>
				<FormulateInput 
					name="username"
					label="Логин" 
					validation="required" 
				/>
				<FormulateInput
					type="password"
					name="password" 
					label="Пароль" 
					validation="required" 
				/>
				<FormulateInput
					name="favoriteLanguage"
					label="Сүйікті санат"
					type="select"
					:options="{Sport: 'Спорт', Kino: 'Кино', Criminal: 'Қылмыс', Politics: 'Саясат'}"
				/>
				<FormulateInput
					style="margin-top: 15px"
					name="acceptTerms"
					type="checkbox"
					label="Лицензиялық келісім шарттарын қабылдаймын"
					validation="required"/>
				<FormulateInput	
					type="submit" 
					label="Тіркелу" />
			</FormulateForm>
			
			<FormulateForm v-model="formValues" class="w3-panel w3-green w3-round w3-border panel" @submit="handleSubmit" v-if="langIndex === 3">
				<FormulateInput 
					name="name" 
					label="Name" 
					validation="required" 
				/>
				<FormulateInput 
					name="email" 
					label="E-mail" 
					validation="required|email" 
				/>
				<FormulateInput 
					name="username"
					label="Login" 
					validation="required" 
				/>
				<FormulateInput
					type="password"
					name="password" 
					label="Password" 
					validation="required" 
				/>
				<FormulateInput
					name="favoriteCategory"
					label="Favorite category"
					type="select"
					:options="{Sport: 'Sport', Kino: 'Kino', Criminal: 'Criminal', Politics: 'Politics'}"
				/>
				<FormulateInput
					style="margin-top: 15px"
					name="acceptTerms"
					type="checkbox"
					label="I accept License Agreement Terms"
					validation="required"/>
				<FormulateInput
					type="submit" 
					label="Sign Up" />
			</FormulateForm>
		</div>
	</div>	
</template>

<script>
	import { store } from '../main.js'
	export default {
		data: () => ({
			formValues: {},
			langIndex: store.state.langIndex
		}),
		methods: {
			handleSubmit() {
				alert("Form submitted!")
				console.log("Form submitted!", this.formValues)
			},
			switchLangReg(n) {
				this.langIndex = n
				store.setLangAction(n)
			}
		}
	}	
</script>