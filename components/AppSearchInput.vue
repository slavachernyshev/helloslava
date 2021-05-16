<template>
  <div>
    <input type="search" v-model="searchQuery" autocomplete="off" placeholder="Поиск..." />
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchQuery: '',
    posts: []
  }),

  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.posts = []
        return
      }
      this.posts = await this.$content('posts')
        .limit(10)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
