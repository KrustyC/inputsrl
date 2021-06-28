<script lang="ts">
  import { servizi } from '../utils/servizi';
</script>

<div id="servizi">
  <h1>Grazie al nostro team di professionisti, possiamo aiutare i nostri clienti con:</h1>

  <div class="grid">
    {#each servizi as servizio}
    <div class="flex">
      <div class="plus">
        +
      </div>
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
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 50px;
    padding-bottom: 150px;
  }

  .flex {
    display: flex;
    flex-direction: row;
  }

  .plus {
    font-size: 40px;
    margin-right: 10px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 40px;
      font-weight: normal;
      margin: 0;
    }

    p {
      font-size: 21px;
    }
  }
</style>