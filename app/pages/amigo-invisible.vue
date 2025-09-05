<template>
    <div>
        <Head>
            <Title>Información amigo invisible</Title>
            <Meta name="description" content="Toda la información sobre cómo funciona el amigo invisible, reglas del juego y consejos para organizar el mejor intercambio de regalos." />
        </Head>
        
        <h1 class="main-title">Información sobre el amigo invisible</h1>
        
        <div class="wrap-container">
            <h2>¿Qué es el amigo invisible?</h2>
            <p>El amigo invisible es un juego tradicional donde cada participante regala a otro participante de forma anónima. Es perfecto para celebraciones navideñas, cumpleaños o cualquier ocasión especial.</p>
            
            <h2>¿Cómo funciona?</h2>
            <ul class="styled-li">
                <li class="styled-li">Cada participante añade su nombre y email</li>
                <li class="styled-li">Se realiza el sorteo automáticamente</li>
                <li class="styled-li">Cada persona recibe por email a quién debe regalar</li>
                <li class="styled-li">¡Mantén el secreto hasta el día del intercambio!</li>
            </ul>
            
            <h2>Consejos para el mejor amigo invisible</h2>
            <ul class="styled-li">
                <li class="styled-li">Establece un presupuesto máximo</li>
                <li class="styled-li">Puedes crear listas de deseos para facilitar la elección</li>
                <li class="styled-li">Respeta las exclusiones si las hay</li>
                <li class="styled-li">¡Diviértete y sé creativo con tu regalo!</li>
            </ul>
        </div>
        
        <div class="center-container mt-2">
            <NuxtLink to="/" class="primary-button-link">
                <span>Crear sorteo</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
    if (process.client) {
        window.scrollTo(0, 0);
    }
})
</script>
