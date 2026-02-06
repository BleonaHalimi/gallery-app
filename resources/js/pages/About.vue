<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouterComposable } from '@/composables';
import { AppLayout, Button } from '@/components';

const { router } = useRouterComposable();

onMounted(() => {
    document.title = 'About - Gallery App';
});

function goHome() {
    router.push('/');
}
</script>

<template>
    <AppLayout title="About">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-4">About Page</h1>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
                This is an example page demonstrating Vue Router navigation.
            </p>
            <Button @click="goHome">Go Home</Button>
        </div>
    </AppLayout>
</template>

