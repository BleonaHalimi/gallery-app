<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/lib/utils';

interface Props {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
});

const emit = defineEmits<{
    click: [event: MouseEvent];
}>();

const buttonClasses = computed(() => {
    const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800',
    };
    
    const sizes = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-lg',
    };
    
    return cn(base, variants[props.variant], sizes[props.size]);
});

function handleClick(event: MouseEvent) {
    if (!props.disabled) {
        emit('click', event);
    }
}
</script>

<template>
    <button :class="buttonClasses" :disabled="disabled" :type="type" @click="handleClick">
        <slot />
    </button>
</template>

