<script lang="ts">
  import { posts } from '../utils/posts';
</script>

<div class="grid">
  {#each posts as post}
    <div class="flex">
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
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }

  .flex {
    display: flex;
    flex-direction: column;

    img {
      width: 400px;
      height: 100px;
      margin-bottom: 10px;
    }

    .content {
      h3 {
        font-size: 40px;
        font-weight: normal;
        margin: 0;
        color: var(--theme-text);

        &.published {
          color: var(--theme-link);
        }
      }
      
      p {
        font-size: 21px;
      }
    }
  }
</style>