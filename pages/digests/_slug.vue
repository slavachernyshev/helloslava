<template>
  <article class="">
    <!-- Progress -->
    <div class="fixed z-10 top-12 md:top-16 inset-x-0 h-2 bg-transparent">
      <div class="bg-purple-500 h-2" :style="`width: ${progress}%;`"></div>
    </div>

    <header class="bg-yellow-200 pt-12 pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16">
        <div class="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-32">
          <div>
            <p>An old friend of mine, a journalist, once said that paradise on earth was to work all day alone in anticipation of an evening in interesting company.</p>
            <p class="font-bold">&mdash; Ian McEwan</p>
          </div>
          <div class="flex flex-col md:items-end space-y-1">
            <div class="w-96 h-96 bg-yellow-300"></div>
            <div class="w-96 text-right text-sm">Featured artist: Bryndon Díaz</div>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16 relative">
      <div class="absolute -top-32">
        <img src="~/assets/images/logo.png" alt="Secret Level" class="w-32">
      </div>
      <div class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2 prose prose-indigo 7d:prose-lg lg:prose-xl">
        <nuxt-content :document="post" />
      </div>
    </div>

  </article>
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
        { name: "twitter:data2", content: "Ежемесячная рассылка" },
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
    const post = await $content('digests', params.slug).fetch()
    const [prev, next] = await $content('digests')
      .only(['title', 'slug', 'createdAt'])
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
