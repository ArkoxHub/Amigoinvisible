<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    title: String,
    required: false
})

onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <h1 class="main-title">Recuperación sorteo</h1>
    <p>Estamos trabajando actualmente en ofrecerte este servicio.</p>
    <p>Sección destinada para la recuperación de sorteos anteriores, para que puedas volver a jugar en caso necesario.
    </p>
    <!-- TODO Create input to receive draw code and get all the info related -->
</template>

<style scoped>
p {
    margin-bottom: 2rem;
}
</style>