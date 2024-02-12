<script>

export default{
    name:"AppHome"
}
</script>

<template>
<section>
<h1>Lynyrd Skynyrd: Sweet <strong>Home</strong> Alabama</h1>

<div v-for="event in store.event">
	<h2>{{ event.name }}</h2>
	<img src="{{ event.image }}" alt="immagine">
	<span>{{ event.description }}</span>
	</div>
</section>
</template>

<style scoped>


</style>
