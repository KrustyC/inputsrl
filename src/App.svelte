<script lang="ts">
  import { Page } from './utils/links';
  import ThemeContext from './ThemeContext.svelte';
  import BottomNavigation from './components/BottomNavigation.svelte';
  import Slider from './components/Slider.svelte';
  import Layout from './Layout.svelte';
  import Home from './pages/Home.svelte';
  import Obbiettivi from './pages/Obbiettivi.svelte';
  import Servizi from './pages/Servizi.svelte';
  import Talenti from './pages/Talenti.svelte';
  import Esempi from './pages/Esempi/Esempi.svelte';
  import Blog from './pages/Blog.svelte';
  import LowImpact from './pages/LowImpact.svelte';
  import Contatti from './pages/Contatti.svelte';

  let activePage: Page;
</script>

<ThemeContext>
  <Layout bind:activePage>
    {#if activePage === null}
      <Home />
    {/if}

    {#if activePage === Page.OBBIETTIVI}
      <Obbiettivi />
    {/if}

    {#if activePage === Page.SERVIZI}
      <Servizi />
    {/if}

    {#if activePage === Page.TALENTI}
      <Talenti />
    {/if}

    {#if activePage === Page.ESEMPI}
      <Esempi />
    {/if}

    {#if activePage === Page.BLOG}
      <Blog />
    {/if}

    {#if activePage === Page.CONTATTI}
      <Contatti />
    {/if}

    {#if activePage === Page.LOW_IMPACT}
      <LowImpact />
    {/if}
  </Layout>
</ThemeContext>

<style lang="scss">
  :global(html) {
    background: var(--theme-background);
    color: var(--theme-text);
  }

  :global(a) {
    color: var(--theme-link);
    text-decoration: none;
  }
  :global(a:visited) {
    color: var(--theme-link);
  }
</style>
