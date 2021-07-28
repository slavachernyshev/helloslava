<template>
  <article class="xl:divide-y xl:divide-gray-200">
    <!-- Search -->
    <!-- <app-search-input /> -->
    <!-- Header -->
    <header class="xl:pb-10 pt-6 md:pt-12 lg:pt-24">
      <div class="space-y-1 text-center">
        <div>
          <a href="/helloslava/" class="font-extrabold text-gray-900 rounded-full bg-gray-100 py-2 px-4 my-6 inline-block">Секретный уровень</a>
        </div>
        <dl class="space-y-10">
          <div>
            <dt class="sr-only">Published on</dt>
            <dd class="text-base leading-6 font-medium text-gray-500">
              <time :datetime="post.createdAt">{{ formatDate(post.createdAt) }}</time>
            </dd>
          </div>
        </dl>
        <div>
          <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-tight">
            {{ post.title }}
          </h1>
        </div>
        <div class="text-xs text-gray-700">
          {{ post.theme }}
        </div>
      </div>
    </header>
    <div class="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20" style="grid-template-rows: auto 1fr;">
      <dl class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
        <dt class="sr-only">Authors</dt>
        <dd>
          <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
            <li class="flex items-center space-x-2">
              <img src="@/assets/images/cher.png" alt="" class="w-10 h-10 rounded-full">
              <dl class="text-sm font-medium leading-5 whitespace-no-wrap">
                <dt class="sr-only">Name</dt>
                <dd class="text-gray-900">Слава Чернышёв</dd>
                <dt class="sr-only">Twitter</dt>
                <dd>
                  <a href="https://twitter.com/helloslava" class="text-indigo-600 hover:text-indigo-700">@helloslava</a>
                </dd>
              </dl>
            </li>
          </ul>
        </dd>
      </dl>
      <div class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2 prose prose-indigo 7d:prose-lg lg:prose-xl">
        <nuxt-content :document="post" />
      </div>
      <footer class="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
        <div class="space-y-8 py-8">
          <div v-if="next" class="space-y-2">
            <h2 class="text-xs tracking-wide uppercase text-gray-500">Следующий пост</h2>
            <div class="text-indigo-600 hover:text-indigo-700">
              <nuxt-link :to="{ name: 'posts-slug', params: { slug: next.slug } }">{{ next.title }}</nuxt-link>
            </div>
          </div>
          <div v-if="prev" class="space-y-2">
            <h2 class="text-xs tracking-wide uppercase text-gray-500">Предыдущий пост</h2>
            <div class="text-indigo-600 hover:text-indigo-700">
              <nuxt-link  :to="{ name: 'posts-slug', params: { slug: prev.slug } }">{{ prev.title }}</nuxt-link>
            </div>
          </div>
        </div>
        <div class="pt-8">
          <a class="text-indigo-600 hover:text-indigo-700" href="/helloslava/">← Назад в блог</a>
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { post, prev, next }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>
