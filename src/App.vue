<script>
//import AppComponent from "./components/AppComponent.vue";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		//AppComponent
		AppHome,
		AppAbout
	},
	data() {
		return {
			store,
			pathArray :[{
				routeName :"home",
				label : "Home"
			},
			{
				routeName :"about",
				label : "About"
			}]
		}
	},
	mounted() {
		this.doThings();

		axios.get("http://127.0.0.1:8000/api/events").then(risultato => {
			if (risultato.data) {
				console.log(risultato.data);
				console.log(risultato.status);
				console.log(risultato.statusText);
				console.log(risultato);
				
			}
		else	
		{
			"bro c'è un problema con quella cosa che chiami"
		}
		}).catch(errore => {
			console.error(errore);
		});
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<header>
		<div v-for ="(path, paths) in pathArray" :key="paths">
			<router-link :to="{name: path.routeName}" class="nav-link">
				{{ path.label }}</router-link>
		</div>
	</header>
	
	<main>
	<router-view></router-view>
		<!-- <AppComponent />
		<button class="btn btn-primary">
			<font-awesome-icon icon="fa-solid fa-home" class="me-1" />
			<span>Primary button</span>
		</button> -->
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
header{
	background-color: darkorchid;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
header div{
	margin: 0% 2% 0% 0%;
}
main {
	padding: 1rem;
}
</style>