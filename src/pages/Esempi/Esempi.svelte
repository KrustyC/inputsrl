<script lang="ts">
  import { esempi } from '../../utils/esempi';
  import Esempio from './Esempio.svelte';

  let openEsempio: number | null = null;

  function onToggle(id: number) {
    openEsempio = openEsempio === id ? null : id;
  }
</script>

<div>
  <h1>Potenziamo la capacità commerciale delle realtà retail</h1>
  <div id="esempi-container">
    <p id="copy">
      Attraverso una  lettura puntuale dei dati e delle informazioni, costruiamo
      strategie marketing su misura. Grazie a una visione d’insieme scegliamo il
      piano operativo più efficace, integrando i progetti di comunicazione con i
      sistemi nativi dei clienti.
    </p>
    <div id="progetti">
      {#each esempi as esempio}
        <Esempio {esempio} isOpen={openEsempio === esempio.id} {onToggle} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  #esempi-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;
    font-size: 25px;
    line-height: 29.5px;

    @media only screen and (min-width: 720px) {
      flex-direction: row;
      font-size: 40px;
      line-height: 40.2px;
    }
  }

  #copy {
    text-align: left;
    flex: 1;
    margin: 0;
    margin-bottom: 30px;

    @media only screen and (min-width: 720px) {
      width: 50%;
      margin-right: 50px;
    }
  }

  #progetti {
    text-align: left;
    flex: 1;

    @media only screen and (min-width: 720px) {
      width: 50%;
      margin-right: 50px;
    }
  }
</style>
