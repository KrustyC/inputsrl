<script lang="ts">
  import { getContext } from 'svelte';
  import { Page } from './utils/links';
  import BottomNavigation from './components/BottomNavigation.svelte';
  import Slider from './components/Slider.svelte';

  const { theme, toggle } = getContext('theme');

  export let activePage: Page | null;

  function onGoHome() {
    activePage = Page.HOME;
    window.scrollTo(0, 0);
  }
</script>

<div id="layout" class={$theme.name}>
  <div id="top">
    <div id="content">
      <p id="title">
        <b on:click={() => onGoHome()}>inputidea</b> <span class="dot">.</span> it
      </p>
      <Slider />
    </div>
  </div>

  <div id="side">
    <p id="side-title">
      <b on:click={() => onGoHome()}>inputidea</b> <span class="dot">.</span> it
    </p>
  </div>

  <main>
    <slot />
  </main>

  <BottomNavigation bind:active={activePage} />
</div>

<style lang="scss">
  #layout {
    min-height: 90vh;

    &.dark {
      cursor: url('/images/yellow-dot.svg'), auto !important;

      :global(a:hover) {
        cursor: url('/images/yellow-dot.svg'), auto !important;
        text-decoration: underline;
      }
    }

    &.light {
      cursor: url('/images/red-dot.svg'), auto !important;

      :global(a:hover) {
        cursor: url('/images/red-dot.svg'), auto !important;
        text-decoration: underline;
      }
    }

    main {
      text-align: left;
      padding-top: 50px;
      width: 80vw;
      max-width: 80vw;
      margin: 0 auto;
      color: var(--theme-text);
    }

    .dot {
      color: var(--theme-link);
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
      z-index: 1000;

      #content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80vw;
        margin: 0 auto;
      }
    }

    #side {
      display: none;
    }

    @media (min-width: 720px) {
      main {
        max-width: 80vw;
        padding-top: 0;
      }

      #top {
        display: none;
      }

      #side {
        position: fixed;
        font-size: 25px;
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        right: 50px;
        top: 100px;

        #side-title {
          transform: rotate(-90deg);
        }
      }
    }
  }
</style>
