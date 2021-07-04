<div>
  <h1>Tecnologia + Creatività</h1>
  <div id="obbiettivi-container">
    <p>
      Attraverso una  lettura puntuale dei dati e delle informazioni, costruiamo
      strategie marketing su misura. Grazie a una visione d’insieme scegliamo il
      piano operativo più efficace, integrando i progetti di comunicazione con i
      sistemi nativi dei clienti.
    </p>
    <p>
      Potenziamo la capacità commerciale delle realtà retail nel territorio con
      lo sviluppo di piattaforme web e piani di comunicazione integrata,
      permettendo ai clienti di raggiungere gli obiettivi nei tempi concordati.
    </p>
  </div>
</div>

<style lang="scss">
  #obbiettivi-container {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 720px) {
      flex-direction: row;
    }
  }

  p {
    font-size: 25px;
    line-height: 29.5px;
    text-align: left;
    display: flex;
    flex: 1;

    &:last-of-type {
      margin-bottom: 200px;
    }

    @media only screen and (min-width: 720px) {
      width: 50%;
      font-size: 40px;
      line-height: 40.2px;

      &:first-of-type {
        margin-right: 50px;
      }

      &:last-of-type {
        margin-bottom: 10px;
      }
    }
  }
</style>
