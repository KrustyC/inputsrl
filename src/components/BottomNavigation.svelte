<script lang="ts">
  import { getContext } from 'svelte';
  import { links, Page } from '../utils/links';
  import Slider from './Slider.svelte';

  export let active = null;
  const { theme } = getContext('theme');

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
          on:click={() => enter(link.id)}
        >
          {link.label} .
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 3px solid var(--theme-border);
    border-bottom: 0px;
    margin-bottom: 30px;

    :nth-child(odd) {
      border-right: 3px solid var(--theme-border);
    }

    @media only screen and (min-width: 720px) {
      display: flex;
      margin-bottom: 0px;

      flex-direction: row;
      height: 53px;
      width: 100%;
      border-bottom: 3px solid var(--theme-border);
    }
  }

  #credits {
    display: none;

    @media only screen and (min-width: 720px) {
      display: flex;
      font-size: 13px;
      justify-content: space-between;
      color: var(--theme-text);

      a {
        color: var(--theme-link);
        text-decoration: none;
      }
    }
  }

  .bottom-navigation-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    color: var(--theme-text);
    border-bottom: 3px solid var(--theme-border);

    @media only screen and (max-width: 720px) {
      height: 39px;
    }

    @media only screen and (min-width: 720px) {
      border-bottom: 0px;
      font-size: 30px;
    }

    &.link {
      &:hover,
      &.active {
        background: var(--theme-text);
        color: var(--theme-background);
      }
    }

    &.switch-container {
      display: none;

      @media only screen and (min-width: 720px) {
        display: flex;
      }
      background: var(--theme-text);
      color: var(--theme-background);
    }

    &:not(:last-of-type) {
      @media only screen and (min-width: 720px) {
        border-right: 3px solid var(--theme-border);
      }
    }
  }
</style>
