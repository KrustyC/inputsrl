<script lang="ts">
  import { getContext } from "svelte";

  const { theme, toggle } = getContext("theme");
</script>

<label class="switch">
  <input type="checkbox" checked={$theme.name === 'light'} on:change={toggle}>
  <span class="slider"></span>
</label>

<style lang="scss">
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;

    input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--theme-text);
    border: 2px solid var(--theme-background);
    border-radius: 34px;
    -webkit-transition: .3s;
    transition: .3s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: -2px;
    right: 0px;
    bottom: -1px;
    background: var(--theme-text);
    border: 2px solid var(--theme-background);
    -webkit-transition: .3s;
    transition: .3s;
    border-radius: 50%;

  }
  
  input:checked + .slider {
    background: var(--theme-text);
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px var(--theme-background);
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  </style>