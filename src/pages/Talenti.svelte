<script lang="ts">
  import { talenti } from '../utils/talenti';
</script>

<div id="talenti">
  <h1>Un team di coders, designers, digital strategists e molto di più.</h1>
  <div class="grid">
    {#each talenti as talento}
      <div class="flex">
        <div class="picture">
          <img src={talento.foto} alt="profile" >
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
    max-width: 1200px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }

  .flex {
    display: flex;
    flex-direction: row;
  }

  .picture, img{
    width: 180px;
    height: 180px;
  }

  .content {
    margin-left: 20px;
    h3 {
      color: var(--theme-text);
      font-size: 35px;
      font-weight: normal;
      margin: 0;
    }

    .details {
      margin-top: 10px;
      font-size: 21px;
      p {
        margin: 8px 0;
      }
      .email {
        color: var(--theme-link);
      }
    }
  }

 
</style>