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
		this.getEventList();

		
	},
	methods: {
		getEventList() {
			let link = this.store.apiUrl + this.store.eventEndpoint;

			axios.get(link).then(risultato => {
			if (risultato.status===200 && risultato.statusText === "OK") {
				console.log(risultato.data);
				console.log(risultato.status);
				console.log(risultato.statusText);
				this.store.eventList = risultato.data;
				
				
			}
		else	
		{
			console.error("compare c'è un problema con quella cosa che chiami codice")
		}
		}).catch(errore => {
			console.error(errore);
		});
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

	<div v-for="event in store.eventList">
	<h2>{{ event.name }}</h2>
	<img src="{{ event.image }}" alt="immagine">
	<span>{{ event.description }}</span>
	</div>

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