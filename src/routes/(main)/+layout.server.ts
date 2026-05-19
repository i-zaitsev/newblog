import { env } from '$env/dynamic/public';

export function load() {
    return {
        showPlaceholder: env.PUBLIC_SHOW_PLACEHOLDER === 'true',
    };
}
