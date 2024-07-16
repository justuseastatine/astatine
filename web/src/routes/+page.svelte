<script>
    import { t } from "$lib/i18n/translations";

    import Omnibox from "$components/save/Omnibox.svelte";
    import ExpressionSmile from "$components/expression/ExpressionSmile.svelte";
</script>

<svelte:head>
    <title>{$t("general.astatine")}</title>
</svelte:head>

<div id="astatine-save-container" class="center-column-container">
    <main id="astatine-save">
        <ExpressionSmile />
        <Omnibox />
    </main>
    <div id="terms-note">
        {$t("save.terms.note.agreement")} <a href="/about">{$t("save.terms.note.link")}</a>
    </div>
</div>

<style>
    #astatine-save-container {
        padding: var(--padding);
        overflow: hidden;
    }

    #astatine-save {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 15px;
    }

    #terms-note {
        bottom: 0;
        color: var(--gray);
        font-size: 13px;
        text-align: center;
        padding-bottom: var(--padding);
    }

    @media screen and (max-width: 535px) {
        #terms-note {
            font-size: 11px;
            padding-bottom: 0;
        }
    }
</style>
