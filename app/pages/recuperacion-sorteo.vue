<template>
    <div>
        <Head>
            <Title>Recuperación sorteo amigo invisible</Title>
            <Meta name="description" content="Recupera los resultados de tu sorteo de amigo invisible si has perdido el enlace o el correo electrónico." />
        </Head>
        
        <h1 class="main-title">Recuperación del sorteo</h1>
        <h2>¿Has perdido los resultados de tu sorteo?</h2>
        
        <div class="wrap-container">
            <p>Si has perdido el enlace o el correo electrónico con los resultados de tu sorteo de amigo invisible, puedes intentar recuperarlo aquí.</p>
            
            <div class="center-container mt-2">
                <NuxtLink to="/" class="primary-button-link">
                    <span>Volver al inicio</span>
                </NuxtLink>
            </div>
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
