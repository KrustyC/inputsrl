<script lang="ts">
  import type { Esempio } from '../utils/esempi';

  export let esempio: Esempio;

  let open = false;

  function onToggle() {
    open = !open;
  }
</script>

<div class="esempio">
  <div on:click={onToggle}>
    <div class="plus" class:open>+</div>
  </div>
  <div class="content">
    <h3 on:click={onToggle}>{esempio.titolo}</h3>
    <p class:open>{esempio.testo}</p>
  </div>
</div>

<style lang="scss">
  .esempio {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  }

  .plus {
    font-size: 30px;
    line-height: 35.4px;
    margin-right: 10px;
    color: var(--theme-link);
    transition: all 0.4s ease-in-out;

    &.open {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    @media only screen and (min-width: 720px) {
      font-size: 40px;
      line-height: 40.2px;
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 30px;
      line-height: 35.4px;
      font-weight: normal;
      color: var(--theme-link);
      margin: 0;

      @media only screen and (min-width: 720px) {
        font-size: 40px;
        line-height: 40.2px;
      }
    }

    p {
      font-size: 25px;
      line-height: 31.6px;
      display: none;

      &.open {
        display: block;
      }

      @media only screen and (min-width: 720px) {
        font-size: 21px;
        line-height: 26.6px;
      }
    }
  }
</style>
