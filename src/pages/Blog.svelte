<script lang="ts">
  import { getContext } from 'svelte';
  import { posts } from '../utils/posts';

  const { theme } = getContext('theme');
</script>

<div class="grid">
  {#each posts as post}
    <div class="post">
      <img
        src={$theme.name === 'dark' ? post.immagineDark : post.immagineLight}
        alt={post.titolo}
      />
      <div class="content">
        {#if post.pubblicato}
          <a href={post.link} target="_blank">{post.titolo}</a>
        {:else}
          <h3>{post.titolo}</h3>
        {/if}
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
        width: 351px;
      }
    }

    .content {
      h3,
      a {
        font-size: 30px;
        line-height: 35.4px;
        font-weight: normal;
        margin: 0;

        @media only screen and (min-width: 720px) {
          font-size: 40px;
          line-height: 47.6px;
          font-weight: normal;
        }
      }

      h3 {
        color: var(--theme-text);
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
