<script setup lang="ts">

</script>

<template>
    <div class="grid place-items-center">
        <div class="flex gap-3 flex-col sm:flex-row">
            <NuxtLink to="/rename" class="w-[300px] rounded-lg shadow-md hover:scale-[105%] will-change-transform transition-transform cursor-pointer bg-white grid place-content-center border h-[200px]">
                Rename and convert images
            </NuxtLink>
            <NuxtLink to="/convert" class="w-[300px] rounded-lg shadow-md hover:scale-[105%] will-change-transform transition-transform cursor-pointer bg-white grid place-content-center border h-[200px]">
                Convert pdf to images
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>