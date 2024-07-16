<script>
    import IconAstatine from '$lib/icons/Astatine.svelte';
</script>

<div id="astatine-logo">
    <IconAstatine />
</div>

<style>
    #astatine-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: calc(var(--padding) * 2);

        /* accommodate space for scaling animation */
        padding-bottom: calc(
            var(--padding) * 2 - var(--sidebar-inner-padding)
        );
    }

    @media screen and (max-width: 535px) {
        #astatine-logo {
            display: none;
        }
    }
</style>
