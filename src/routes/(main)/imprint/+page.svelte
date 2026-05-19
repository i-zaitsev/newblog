<script lang="ts">
    import { onMount } from 'svelte';

    let email = $state('');

    onMount(async () => {
        const res = await fetch('/api/contact');
        if (res.ok) {
            const { local, domain } = await res.json();
            email = `${local}@${domain}`;
        }
    });
</script>

<svelte:head>
    <title>Imprint</title>
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
</svelte:head>

<div class="container">
    <section class="content">
        <div class="text">
            <h1>Imprint</h1>
            <address>
                Ilia Zaitsev<br>
                Lappenbergsallee 4E<br>
                20257 Hamburg<br>
                Germany
            </address>
            <p>E-Mail: {email || '…'}</p>
            <p>LinkedIn: <a href="https://linkedin.com/in/ilia-zaitsev">linkedin.com/in/ilia-zaitsev</a></p>
        </div>
    </section>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 200px);
        padding: 1rem 0;
        box-sizing: border-box;
    }

    section {
        max-width: 800px;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        border: none;
        background: linear-gradient(135deg, #e8e9eb 0%, #d1d3d8 50%, #b8bcc2 100%);
        box-shadow: 0 12px 30px rgba(26, 26, 46, 0.15);
        font-family: var(--font-system-ui), sans-serif;
        position: relative;
        overflow: hidden;
    }

    section:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #1a1a2e, #0f3460);
        z-index: 1;
    }

    h1 {
        color: #1a1a2e;
        margin-top: 0.5rem;
        font-weight: 800;
    }

    address {
        font-style: normal;
        line-height: 1.6;
        margin: 1rem 0;
    }

    a {
        color: #0f3460;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    a:hover {
        color: #4263eb;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        section {
            max-width: 400px;
            padding: 1.25rem;
        }
    }
</style>
