<template>
    <div>
        <input type="file" multiple @change="handleFileChange"/>

    </div>
</template>

<script setup lang="ts">


const files = ref([])


const handleFileChange = async (event) => {
    files.value = Array.from(event.target.files);
    const formData = new FormData()
    files.value.forEach(file => {
        formData.append('photo', file)
    })
    const {data} = useFetch('/api/rename', {
        method: 'POST',
        body: formData
    })
    console.log(data)
}


</script>