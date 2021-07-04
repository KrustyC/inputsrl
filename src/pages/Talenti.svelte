<script lang="ts">
  import { talenti } from '../utils/talenti';
</script>

<div id="talenti">
  <h1>Un team di coders, designers, digital strategists e molto di più.</h1>
  <div class="grid">
    {#each talenti as talento}
      <div class="talento">
        <div class="picture">
          <img src={talento.foto} alt="profile" />
        </div>
        <div class="content">
          <h3>{talento.nome}</h3>
          <div class="details">
            <p>{talento.ruolo} - <span class="email">{talento.email}</span></p>
            {#each talento.specializzazioni as specializzazione}
              <p>[{specializzazione}]</p>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  #talenti {
    @media only screen and (min-width: 720px) {
      max-width: 1200px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    padding-bottom: 200px;

    @media only screen and (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 30px;
      flex-direction: row;
    }
  }

  .talento {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 720px) {
      flex-direction: row;
    }
  }

  .picture,
  img {
    width: 105px;
    height: 105px;

    @media only screen and (min-width: 720px) {
      width: 180px;
      height: 180px;
    }
  }

  .content {
    h3 {
      color: var(--theme-text);
      font-size: 30px;
      line-height: 35.4px;
      font-weight: normal;
      margin: 0;
    }

    .details {
      margin-top: 10px;
      font-size: 20px;
      line-height: 23.6px;
      p {
        margin: 8px 0;
      }
      .email {
        color: var(--theme-link);
      }
    }

    @media only screen and (min-width: 720px) {
      margin-left: 20px;
      h3 {
        font-size: 35px;
      }

      .details {
        font-size: 21px;
        line-height: 26.6px;
      }
    }
  }
</style>
