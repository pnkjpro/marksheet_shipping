<script setup>
defineProps({
    students: {
        type: Object,
        required: true,
    }
})

const updatePageNumber = (link) =>{
    let pageNumber = link.label;
    console.log(pageNumber);
}
</script>
<template>
    <div class="max-w-7xl mx-auto py-6">
        <div class="max-w-none mx-auto">
            <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                <div
                    class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                >
                    <div class="flex-1 flex justify-between sm:hidden" />
                    <div
                        class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
                    >
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <!-- space -->
                                <span class="font-medium">{{ students.from }}</span>
                                <!-- space -->
                                to
                                <!-- space -->
                                <span class="font-medium">{{ students.to }}</span>
                                <!-- space -->
                                of
                                <!-- space -->
                                <span class="font-medium"> {{ students.total }} </span>
                                <!-- space -->
                                results
                            </p>
                        </div>
                        <div>
                            <button
                            @click.prevent="updatePageNumber(link)"
                            v-for="(link,index) in students.links"
                                :key="index"
                                    :disabled="link.active || !link.url"
                                    class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    :class="{
                                        'z-10 bg-indigo-50 border-indigo-500 text-indigo-600': link.active,
                                        'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': !link.active,
                                    }"

                                >
                                    <span v-html="link.label"></span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
