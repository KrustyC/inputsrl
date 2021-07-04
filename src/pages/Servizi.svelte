<script lang="ts">
  import { servizi } from '../utils/servizi';
</script>

<div id="servizi">
  <h1>
    Grazie al nostro team di professionisti, possiamo aiutare i nostri clienti
    con:
  </h1>

  <div class="grid">
    {#each servizi as servizio}
      <div class="flex">
        <div class="plus">+</div>
        <div class="content">
          <h3>{servizio.title}</h3>
          <p>{servizio.copy}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  #servizi {
    max-width: 1200px;
  }

  h1 {
    max-width: 1000px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    padding-bottom: 180px;

    @media only screen and (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 40px;
      grid-column-gap: 30px;
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
  }

  .plus {
    font-size: 30px;
    line-height: 35.4px;
    margin-right: 10px;

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
      margin: 0;

      @media only screen and (min-width: 720px) {
        font-size: 40px;
        line-height: 40.2px;
      }
    }

    p {
      font-size: 21px;
    }
  }
</style>
