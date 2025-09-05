<template>
    <div>
        <Head>
            <Title>Lista de deseos amigo invisible</Title>
            <Meta name="description" content="Crea y gestiona tu lista de deseos para el amigo invisible. Facilita la elección de regalos para tu grupo." />
        </Head>
        
        <h1 class="main-title">Lista de deseos</h1>
        <h2>Gestiona tu lista de deseos para el amigo invisible</h2>
        
        <div class="wrap-container">
            <p>Aquí podrás crear y gestionar tu lista de deseos para facilitar la elección de regalos en tu grupo de amigo invisible.</p>
            
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
