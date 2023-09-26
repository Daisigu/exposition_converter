<template>
    <div>
        <input type="file" multiple @change="handleFileChange"/>
        <button @click="convertFiles">Convert files</button>
        <a href="/convertedArchive/renamedAndCompressed/uploads.zip" target="_blank">Download Archive</a>
    </div>
</template>

<script setup lang="ts">
const files = ref([])
const handleFileChange = async (event: HTMLInputElement) => {
    files.value = Array.from((event as HTMLInputElement).currentTarget.files);
    const formData = new FormData()
    files.value.forEach(file => formData.append('photo', file))
    const {data} = useFetch('/api/rename', {
        method: 'POST',
        body: formData
    })
}
const convertFiles = () => {
    useFetch('/api/archivateFiles', {
        method: 'POST',
        body: {
            dir: 'renamedAndCompressed'
        }
    })
}
</script>