import { env } from '$env/dynamic/private';

export function load() {
    return {
        showPlaceholder: env.PUBLIC_SHOW_PLACEHOLDER === 'true',
    };
}
