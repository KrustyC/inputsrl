<script lang="ts">
  import { posts } from '../utils/posts';
</script>

<div class="grid">
  {#each posts as post}
    <div class="post">
      <img src={post.immagine} alt={post.titolo} />
      <div class="content">
        <h3 class={post.pubblicato ? 'published' : ''}>{post.titolo}</h3>
        <p>{post.data}</p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .grid {
    padding: 30px 0;
    padding-bottom: 200px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;

    @media only screen and (min-width: 720px) {
      padding: 100px 0;
      grid-column-gap: 30px;
      grid-row-gap: 50px;
      grid-template-columns: 1fr 1fr;
    }
  }

  .post {
    display: flex;
    flex-direction: column;

    img {
      max-width: 100%;
      height: 100px;
      margin-bottom: 10px;

      @media only screen and (min-width: 720px) {
        width: 400px;
      }
    }

    .content {
      h3 {
        font-size: 30px;
        line-height: 35.4px;
        font-weight: normal;
        margin: 0;
        color: var(--theme-text);

        &.published {
          color: var(--theme-link);
        }

        @media only screen and (min-width: 720px) {
          font-size: 40px;
          line-height: 47.6px;
          font-weight: normal;
        }
      }

      p {
        font-size: 20px;

        @media only screen and (min-width: 720px) {
          font-size: 21px;
        }
      }
    }
  }
</style>
