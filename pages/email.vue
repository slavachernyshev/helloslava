<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16">
    <main class="divide-y divide-gray-200">
      <!-- Search -->
      <!-- <app-search-input /> -->
      <!-- Header -->
      <div class="py-4">
        <img src="~/assets/images/sl.png" alt="Secret Level" class="w-60">
      </div>
      <div class="flex items-center space-x-4 md:space-x-6 pt-6 pb-8 space-y-2 md:space-y-5">
        <img src="@/assets/images/cher.png" class="h-16 md:h-20 w-20 md:w-20 bg-gray-100 rounded-full" />
        <div class="flex-1 space-y-2">
          <div class="text-sm md:text-md leading-tight text-gray-500">Меня зовут Слава Чернышёв. Я занимаюсь кибербезопасностью.</div>
          <div class="text-sm md:text-md leading-tight text-gray-500">
            Присоединяйтесь: <a href="https://t.me/slavahello" class="text-indigo-600 hover:text-indigo-700">t.me/slavahello</a>
          </div>
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
                  <nuxt-link :to="{ name: 'digests-slug', params: { slug: post.slug} }" class="text-gray-900">{{ post.title }}</nuxt-link>
                </h2>
                <div class="prose max-w-none text-gray-500">
                  <p>{{ post.description }}</p>
                </div>
              </div>
              <div class="text-base leading-6 font-medium">
                <nuxt-link :to="{ name: 'digests-slug', params: { slug: post.slug} }" class="text-indigo-600 hover:text-indigo-700">Читать дальше &middot; {{ post.ttr }}</nuxt-link>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('digests')
      .only(['title', 'description', 'slug', 'createdAt', 'ttr'])
      .sortBy('createdAt', 'desc')
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