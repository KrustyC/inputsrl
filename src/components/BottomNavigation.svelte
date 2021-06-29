<script lang="ts">
  import { getContext } from 'svelte';
  import { links, Page } from '../utils/links';
  import Slider from './Slider.svelte';

  export let active = null;
  const { theme } = getContext('theme') ;

  function enter(item: Page) {
    active = item;
  }
</script>

<div id="bottom-navigation">
  <div id="main">
    <div class="links">
      {#each links as link}
        <div
          class="bottom-navigation-item link"
          class:active={active === link.id}
          on:mouseenter={() => enter(link.id)}
        >
          {link.label}
        </div>
      {/each}
      <div
        class="bottom-navigation-item switch-container"
        class:active={$theme.name === 'light'}
      >
        <Slider />
      </div>
    </div>
    <div id="credits">
      <p>© 2021 - Input</p>
      <p>
        Website by <a href="https://matteobandi.com">Matteo Bandi</a> &
        <a href="https://dcrestini.me">Davide Crestini</a>
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  #bottom-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    background: var(--theme-background);
  }

  #main {
    width: 80%;
  }

  .links {
    display: flex;
    flex-direction: row;
    height: 53px;
    width: 100%;
    border: 3px solid var(--theme-border);
  }

  #credits {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    color: var(--theme-text);

    a {
      color: var(--theme-link);
      text-decoration: none;
    }
  }

  .bottom-navigation-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 30px;
    color: var(--theme-text);

    &.link {
      &:hover,
      &.active {
        background: var(--theme-text);
        color: var(--theme-background);
      }
    }

    &.switch-container {
      background: var(--theme-text);
      color: var(--theme-background);
    }

    &:not(:last-of-type) {
      border-right: 3px solid var(--theme-border);
    }
  }
</style>
