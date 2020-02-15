<template>
  <section>
    <div class="container">
      <div class="block">
        <div class="block tweet-block">
          <Tweet/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tweet from "~/components/Tweet";
export default {
  components: {Tweet},
}
</script>

<style scoped>
.block{
  text-decoration:none;

}
</style>