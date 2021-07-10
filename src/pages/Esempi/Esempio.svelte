<script lang="ts">
  import type { Esempio } from '../utils/esempi';

  export let esempio: Esempio;
  export let isOpen: boolean;
  export let onToggle: (id: number) => void;
</script>

<div class="esempio">
  <div on:click={() => onToggle(esempio.id)}>
    <div class="plus" class:open={isOpen}>+</div>
  </div>
  <div class="content">
    <h3 on:click={() => onToggle(esempio.id)}>{esempio.titolo}</h3>
    <div class="testo" class:open={isOpen}>
      <p>
        {esempio.testo}
      </p>

      <ul>
        {#each esempio.links as link}
          <li>
            <a href={link.link} target="_blank">{link.testo}</a>
          </li>
        {/each}
      </ul>
    </div>
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

    .testo {
      font-size: 25px;
      line-height: 31.6px;
      display: none;

      &.open {
        display: block;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      @media only screen and (min-width: 720px) {
        font-size: 21px;
        line-height: 26.6px;
      }
    }
  }
</style>
