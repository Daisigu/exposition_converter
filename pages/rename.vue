<template>
    <div class="grid place-items-center">
        <div class="flex flex-col items-center gap-2 w-full">
            <div class="w-full">
                <h2 class="text-center mb-5 text-2xl">Convert images to .jpg and rename in order 1.jpg 2.jpg n.jpg..</h2>
                <div class="flex items-center justify-center w-full mb-3">
                    <div v-bind="getRootProps()"
                         class="flex flex-col items-center justify-center w-full h-[400px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <img src="@/assets/icons/cloud.svg" class="w-[30px] opacity-70"/>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span>
                                or drag and drop</p>

                        </div>
                        <input v-bind="getInputProps()" multiple  accept="image/png, image/jpeg"  id="dropzone-file"
                               type="file" class="hidden"/>
                    </div>
                </div>
            </div>

            <a :class="{'pointer-events-none opacity-60 select-none': isButtonDisabled}"
               href="/convertedArchive/renamedAndCompressed/uploads.zip" target="_blank" type="button"
               class="text-white  bg-gradient-to-r   from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg active:scale-105 dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                <span v-if="!isLoading" class="text-[22px] block leading-[32px]">Download</span>
                <div v-else class="min-w-[101px]">
                    <img class="mx-auto" src="@/assets/icons/time.svg"/>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useDropzone} from "vue3-dropzone";

const onDrop = async (acceptFiles: FileList, rejectReasons: any) => {
    isButtonDisabled.value = true
    const formData = new FormData()
    Array.from(acceptFiles).forEach(file => formData.append('photo', file))
    isLoading.value = true
    const {data} = await useFetch('/api/rename', {
        method: 'POST',
        body: formData
    })
    isLoading.value = false
    isButtonDisabled.value = false
}
const isButtonDisabled = ref(true)
const isLoading = ref(false)
const {getRootProps, getInputProps, ...rest} = useDropzone({onDrop});

</script>