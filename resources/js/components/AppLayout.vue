<script setup lang="ts">
import { onMounted, watch } from 'vue';

interface Props {
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Gallery App',
});

onMounted(() => {
    document.title = props.title;
});

watch(() => props.title, (newTitle) => {
    document.title = newTitle;
});
</script>

<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <slot />
    </div>
</template>

