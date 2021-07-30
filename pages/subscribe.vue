<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16">
    <main class="py-4 md:mt-40">
      <div class="md:grid md:grid-cols-2 md:gap-16">
        <div class="space-y-4">
          <nuxt-link custom v-slot="{ navigate }" tag="div" to="/">
            <div @click="navigate" @keypress.enter="navigate" role="link" class="items-center space-x-2 my-4 px-4 py-2 rounded-full cursor-pointer inline-flex hover:bg-gray-100">
              <div>&larr;</div>
              <div>На главную</div>
            </div>
          </nuxt-link>
          <img src="~/assets/images/sl.png" alt="Secret Level" class="w-60">
          <div class="text-xl">Ежемесячное письмо по кибербезопасности, которое поможет вам найти вдохновение или решить проблемы.</div>
          <div class="pt-4">
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup">
              <form action="https://slavachernyshev.us6.list-manage.com/subscribe/post?u=6c667c7166723a7e5c304db16&amp;id=b091b68b0f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">                    
                  <div class="mc-field-group">
                    <label for="mce-EMAIL" class="sr-only">Email Address </label>
                    <input type="email" value="" name="EMAIL" class="required email w-full" id="mce-EMAIL" placeholder="Ваша электронная почта">
                  </div>
                  <div class="mc-field-group input-group my-4">
                    <strong>Выберите подписки:</strong>
                    <ul>
                      <li class="space-x-2"><input type="checkbox" value="1" name="group[53901][1]" id="mce-group[53901]-53901-0"><label for="mce-group[53901]-53901-0">Ежемесячное письмо</label></li>
                      <li class="space-x-2"><input type="checkbox" value="2" name="group[53901][2]" id="mce-group[53901]-53901-1"><label for="mce-group[53901]-53901-1">Обновления в блоге</label></li>
                    </ul>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6c667c7166723a7e5c304db16_b091b68b0f" tabindex="-1" value=""></div>
                  <div class="clear py-4"><input type="submit" value="Подписаться" name="subscribe" id="mc-embedded-subscribe" class="button py-2 px-4 bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"></div>
                </div>
              </form>
            </div>
            <!--End mc_embed_signup-->
          </div>
        </div>
        <div class="space-y-4 pb-32">
          <div class="mt-8 md:mt-52">Присоединяйтесь к моим <span class="bg-yellow-100 inline-block px-1">10 читателям</span> для ежемесячного получения свежих и пропущенных через мой критический фильтр новостей по кибербезопасности, а также из областей, находящихся на стыке с ней. Стараюсь без модных словечек, всякой шумихи и всякого <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC_%D1%83%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B3%D0%BE%D0%B4%D1%8B" class="text-indigo-600 hover:text-indigo-700">FOMO</a></div>
          <ul class="list-disc px-4 space-y-1">
              <li>Интересные инструменты и аналитика</li>
              <li>Полезные приложения и сайты</li>
              <li>Заставяющие задуматься статьи, подкасты и видео</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
</script>
