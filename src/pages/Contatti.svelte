<div>
  <h1>Reggio Emilia</h1>

  <div id="details">
    <p>Via Gramsci, 1</p>
    <p>Reggio Emilia</p>
    <p class="yellow">+39 327 423 7102</p>
    <p class="yellow">info@inputidea.it</p>

    <p id="copy">
      Questo sito è stato progettatto ispirandosi ad alcuni consigli di
      <span class="yellow">Low Tech Magazine</span>
      per la realizzazione di piattaforme digitali a basso impatto energetico e ambientale.
      <br />
      <br />
      Allo stesso tempo, con l’intento di supportare la comunità creativa italiana,
      la typeface utilizzata sulla nostra piattaforma è progettata da
      <span class="yellow">AlfaType</span>, con base a Torino.
    </p>
  </div>
</div>

<style lang="scss">
  h1 {
    display: none;

    @media only screen and (min-width: 720px) {
      display: block;
    }
  }

  p {
    margin: 0;
    font-size: 37px;
    line-height: 43.7px;
    @media only screen and (min-width: 720px) {
      margin-bottom: 10px;
      font-size: 40px;
    }

    &.yellow {
      color: var(--theme-link);
    }
  }

  #copy {
    margin-top: 50px;
    padding-bottom: 200px;
    font-size: 25px;
    line-height: 29.5px;

    span {
      color: var(--theme-link);
    }

    @media only screen and (min-width: 720px) {
      display: none;
    }
  }
</style>
