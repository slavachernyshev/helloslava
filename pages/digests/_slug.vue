<template>
  <article class="">
    <!-- Progress -->
    <div class="fixed z-10 top-12 md:top-16 inset-x-0 h-2 bg-transparent">
      <div class="bg-purple-500 h-2" :style="`width: ${progress}%;`"></div>
    </div>

    <header :class="[post.background ? `${post.background}` : 'bg-yellow-200', 'pt-12 pb-24']">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16">
        <div class="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-28 lg:gap-20 xl:gap-0">
          <div class="lg:text-lg xl:text-xl lg:space-y-2">
            <p>{{ post.foreword }}</p>
            <p v-if="post.forewordLink">&mdash; <a :href="post.forewordLink" class="font-bold underline">{{ post.forewordAuthor }}</a></p>
            <p v-else>&mdash; <span class="font-bold">{{ post.forewordAuthor }}</span></p>
          </div>
          <div class="flex flex-col md:items-end space-y-1">
            <div :class="[post.imageBackground ? `${post.imageBackground}` : 'bg-yellow-300', 'w-96 h-96 overflow-hidden']">
              <img :src="post.image" v-if="post.image">
            </div>
            <div class="w-96 text-right text-xs">
              <span v-if="!post.imageSourceLink">{{ post.imageSource}}</span>
              <a v-else :href="post.imageSourceLink" class="underline">{{ post.imageSource}}</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16 relative">
      <div class="absolute -top-32 xl:-top-40">
        <img src="~/assets/images/logo.png" alt="Secret Level" class="w-32 xl:w-44">
      </div>
      <div class="prose prose-indigo md:prose-lg lg:prose-xl xl:prose-2xl pb-32">
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
      .only(['title', 'slug', 'createdAt', 'background', 'foreword', 'forewordAuthor', 'image', 'imageSource', 'imageBackground', 'imageSourceLink'])
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
