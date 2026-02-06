import { useRouter, useRoute } from 'vue-router';

export function useRouterComposable() {
    const router = useRouter();
    const route = useRoute();

    return {
        router,
        route,
        push: router.push,
        replace: router.replace,
        go: router.go,
        back: router.back,
        forward: router.forward,
    };
}

