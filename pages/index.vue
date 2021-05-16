<template>
  <main class="divide-y divide-gray-200">
    <!-- Search -->
    <app-search-input />
    <!-- Header -->
    <div class="flex items-center space-x-4 pt-6 pb-8 space-y-2 md:space-y-5">
      <div class="h-20 md:h-24 w-20 md:w-24 bg-gray-100 rounded-full"></div>
      <div class="flex-1">
        <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Hello, Slava!</h1>
        <div class="text-md md:text-lg leading-tight text-gray-500">Привет! Меня зовут Слава Чернышёв. Я занимаюсь кибербезопасностью.</div>
      </div>
    </div>

    <!-- Posts -->
    <ul class="divide-y divide-gray-200">
      <li class="py-12" v-for="post in posts" :key="post.slug">
        <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd class="text-base leading-6 font-medium text-gray-500">
              <time :datetime="post.createdAt">{{ formatDate(post.createdAt) }}</time>
            </dd>
          </dl>
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug} }" class="text-gray-900">{{ post.title }}</nuxt-link>
              </h2>
              <div class="prose max-w-none text-gray-500">
                <p>{{ post.description }}</p>
              </div>
            </div>
            <div class="text-base leading-6 font-medium">
              <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug} }" class="text-purple-500 hover:text-purple-600">Read more →</nuxt-link>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </main>
</template>

<script>
import AppSearchInput from '~/components/AppSearchInput.vue'
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'theme', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { posts }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>
