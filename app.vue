<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
    window.addEventListener('keydown', (ev: KeyboardEvent)=>{
       if(ev.code === 'Escape') navigateTo('/')
    })
})
</script>
<template>
    <div class="min-h-[100vh] flex flex-col">
        <Header/>
        <NuxtPage class="container mx-auto flex-auto"/>
    </div>
</template>
