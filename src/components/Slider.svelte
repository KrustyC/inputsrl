<script lang="ts">
  import { getContext } from 'svelte';

  const { theme, toggle } = getContext('theme');
</script>

<label class={`switch switch-${$theme.name}`}>
  <input type="checkbox" checked={$theme.name === 'light'} on:change={toggle} />
  <span class="slider" />
</label>

<style lang="scss">
  .switch {
    &.switch-dark {
      cursor: url('/images/yellow-dot.svg'), auto !important;
    }

    &.switch-light {
      cursor: url('/images/red-dot.svg'), auto !important;
    }

    position: relative;
    display: inline-block;
    width: 40px;
    height: 18px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    @media only screen and (min-width: 720px) {
      width: 50px;
      height: 25px;
    }
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--theme-background);
    border: 2px solid var(--theme-text);
    border-radius: 34px;
    -webkit-transition: 0.3s;
    transition: 0.3s;

    @media only screen and (min-width: 720px) {
      background: var(--theme-text);
      border: 2px solid var(--theme-background);
    }
  }

  .slider:before {
    position: absolute;
    content: '';

    height: 13px;
    width: 13px;
    left: -2px;
    right: 0px;
    bottom: -1px;
    background: var(--theme-background);
    border: 2px solid var(--theme-text);
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 50%;

    @media only screen and (min-width: 720px) {
      height: 19px;
      width: 19px;

      background: var(--theme-text);
      border: 2px solid var(--theme-background);
    }
  }

  input:checked + .slider {
    background: var(--theme-background);

    @media only screen and (min-width: 720px) {
      background: var(--theme-text);
    }
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--theme-background);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);

    @media only screen and (min-width: 720px) {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
</style>
