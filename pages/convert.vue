<script setup lang="ts">
const pptxFile = ref(null)
const handleFileChange = async (event: HTMLInputElement) => {
    pptxFile.value = (event as HTMLInputElement).currentTarget.files[0];
}
const convertFile = () => {
    const formData = new FormData()
    formData.append('pptxFile', pptxFile.value)
    useFetch('/api/convert', {
        method: 'POST',
        body: formData
    })
}
</script>
<template>
        <div>
            convert pptx to jpgs
            <br/>
            <input type="file" accept="application/pdf"  @change="handleFileChange"/>
            <button @click="convertFile">Convert pdf to images</button>
            <a target="_blank" href="/convertedArchive/pdfToImages/uploads.zip">download</a>
        </div>
</template>
