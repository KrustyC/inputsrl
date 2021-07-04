<script lang="ts">
  import BottomNavigation from './components/BottomNavigation.svelte';
  import { Page } from './utils/links';
  import ThemeContext from './ThemeContext.svelte';
  import Slider from './components/Slider.svelte';
  import Home from './pages/Home.svelte';
  import Obbiettivi from './pages/Obbiettivi.svelte';
  import Servizi from './pages/Servizi.svelte';
  import Talenti from './pages/Talenti.svelte';
  import Esempi from './pages/Esempi.svelte';
  import Blog from './pages/Blog.svelte';
  import Contatti from './pages/Contatti.svelte';

  let activePage: Page;
</script>

<ThemeContext>
  <main>
    <div id="top">
      <div id="content">
        <p id="title">
          <b>inputidea</b> . it
        </p>
        <Slider />
      </div>
    </div>

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

    <BottomNavigation bind:active={activePage} />
  </main>
</ThemeContext>

<style lang="scss">
  :global(html) {
    background: var(--theme-background);
    color: var(--theme-text);
  }

  main {
    text-align: left;
    padding-top: 50px;
    width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    color: var(--theme-text);
  }

  #top {
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    background: var(--theme-background);
    height: 80px;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: flex-end;

    #content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80vw;
      margin: 0 auto;
    }
  }

  @media (min-width: 720px) {
    main {
      max-width: 80vw;
      padding-top: 0;
    }
    #top {
      display: none;
    }
  }
</style>
