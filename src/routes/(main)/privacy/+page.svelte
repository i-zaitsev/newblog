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
    <title>Privacy</title>
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
</svelte:head>

<div class="container">
    <section class="content">
        <div class="text">
            <h1>Privacy</h1>
            <h3>Last updated 19 May 2026.</h3>
            <p>
                This is a personal technical blog run by Ilia Zaitsev. There are no
                ads, no analytics, no tracking cookies, no comments, no contact form,
                no newsletter, no accounts. There is nothing to opt into and nothing
                to opt out of.
            </p>

            <h2>Hosting</h2>
            <p>
                The site is hosted on Vercel (Vercel Inc., USA). To deliver any web
                page, Vercel's servers see the usual things every web server sees:
                your IP address, the page you asked for, the time of the request, the
                referrer if your browser sends one, and your browser's user-agent
                string. Vercel keeps this in its operational logs for a short period
                and then deletes it. I do not look at those logs and I do not copy
                anything out of them.
            </p>
            <p>
                Vercel is a US company, so this processing happens in the United
                States. Vercel is certified under the EU&ndash;U.S. Data Privacy Framework,
                which is the basis the EU recognises for transfers of this kind.
            </p>
            <p>
                Their own privacy policy is at <a href="https://vercel.com/legal/privacy-policy">https://vercel.com/legal/privacy-policy</a>
                and is the right place to ask questions about what they store and for
                how long &mdash; I have no access to those logs and can't delete an
                entry from them on request.
            </p>

            <h2>External links</h2>
            <p>
                The blog links out to GitHub, Kaggle, Medium, LinkedIn and similar.
                These are plain links. Nothing is sent to those sites until you click.
                After that their privacy policies apply, not this one.
            </p>

            <h2>Contact</h2>
            <address>
                Ilia Zaitsev<br>
                Lappenbergsallee 4E<br>
                20257 Hamburg<br>
                Germany
            </address>
            <p>E-Mail: {email || '…'}</p>
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

    h2 {
        color: #1a1a2e;
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: 800;
    }

    h3 {
        color: #444;
        font-style: italic;
        margin-bottom: 1.5rem;
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
