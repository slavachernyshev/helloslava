<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16">
    <article class="xl:divide-y xl:divide-gray-200">
      <!-- Progress -->
      <div class="fixed z-10 top-12 md:top-16 inset-x-0 h-2 bg-transparent">
        <div class="bg-purple-500 h-2" :style="`width: ${progress}%;`"></div>
      </div>
      <!-- Search -->
      <!-- <app-search-input /> -->
      <!-- Header -->
      <header class="xl:pb-10 pt-6 md:pt-12 lg:pt-24">
        <div class="space-y-1 text-center">
          <div class="flex justify-center pb-4">
            <a href="/">
              <img src="~/assets/images/sl.png" alt="Secret Level" class="w-32 md:w-60">
            </a>
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
          <div class="text-sm text-gray-700">
            {{ post.ttr }}
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
                  <dt class="sr-only">Telegram</dt>
                  <dd>
                    <a href="https://t.me/slavahello" class="text-indigo-600 hover:text-indigo-700">t.me/slavahello</a>
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
            <a class="text-indigo-600 hover:text-indigo-700" href="/">← Назад в блог</a>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.post.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Secret Level of Cybersecurity' },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme", content: "#ffffff" },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Secret Level' },
        { name: "twitter:site", content: "@slavachernyshev" },
        { name: "twitter:card", content: "summary_large_image" },
        { hid: 'og:image', property: 'og:image', content: `/_nuxt/assets/images/${this.post.preview}` },
        { property: "article:published_time", content: this.post.createdAt },
        { property: "article:modified_time", content: this.post.createdAt },
        { property: "article:tag", content: this.post.theme },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Слава Чернышёв" },
        { name: "twitter:label2", content: "Filed under" },
        { name: "twitter:data2", content: this.post.theme },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favs/favicon.ico' },
        { rel: 'icon', type: 'apple-touch-icon', sizes: '180x180', href: '/favs/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favs/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favs/favicon-16x16.png' },
        { rel: 'manifest', href: '/favs/site.webmanifest' },
        { rel: 'mask-icon', href: '/favs/safari-pinned-tab.svg', color: '#5bbad5' },
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://www.slavachernyshev.ru/posts/${this.post.slug}`
        }
      ]
    }
  },

  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    const [prev, next] = await $content('posts')
      .only(['title', 'slug', 'createdAt', 'theme'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { post, prev, next }
  },

  data: () => ({
    bodyHeight: 0,
    progress: 0
  }),

  mounted () {
    // https://javascript.info/size-and-scroll-window
    this.bodyHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ) - document.documentElement.clientHeight
    window.addEventListener('scroll', this.updateProgress)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.updateProgress)
  },

  methods: {
    updateProgress () {
      this.bodyHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      ) - document.documentElement.clientHeight
      const scrollPosition = window.pageYOffset
      this.progress = (scrollPosition / this.bodyHeight) * 100
    },

    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ru', options)
    }
  }
}
</script>
