<div>
  <h1>Reggio Emilia</h1>

  <div id="details">
    <p class="info">Via Gramsci, 1</p>
    <p class="info">Reggio Emilia</p>
    <a class="info" href="tel:+393274237102">+393274237102</a>
    <br />
    <a class="info" href="mailto:info@inputidea.it" target="_blank"
      >info@inputidea.it</a
    >

    <p id="copy">
      Questo sito è stato progettatto ispirandosi ad alcuni consigli di
      <a
        href="https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website.html"
        target="_blank">Low Tech Magazine</a
      >
      per la realizzazione di piattaforme digitali a basso impatto energetico e ambientale.
      <br />
      <br />
      Allo stesso tempo, con l’intento di supportare la comunità creativa italiana,
      la typeface utilizzata sulla nostra piattaforma è progettata da
      <a href="http://www.alfatypefonts.com/" target="_blank">AlfaType</a>, con
      base a Torino.
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

  #details {
    padding-top: 40px;
  }

  .info {
    margin: 0;
    font-size: 37px;
    line-height: 43.7px;
    margin-bottom: 5px;

    @media only screen and (min-width: 720px) {
      margin-bottom: 10px;
      font-size: 40px;
    }
  }

  #copy {
    margin-top: 50px;
    padding-bottom: 200px;
    font-size: 25px;
    line-height: 29.5px;

    @media only screen and (min-width: 720px) {
      display: none;
    }
  }
</style>
