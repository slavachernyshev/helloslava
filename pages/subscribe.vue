<template>
  <main class="py-4 md:mt-40">
    <div class="md:grid md:grid-cols-2 md:gap-16">
      <div class="space-y-4">
        <nuxt-link tag="div" to="/" class="items-center space-x-2 my-4 px-4 py-2 rounded-full cursor-pointer inline-flex hover:bg-gray-100">
          <div>&larr;</div>
          <div>На главную</div>
        </nuxt-link>
        <img src="~/assets/images/sl.png" alt="Secret Level" class="w-60">
        <div class="text-2xl">A thoughtful weekly newsletter helping you feel inspired, be productive & think critically.</div>
        <div class="pt-4">
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
            <form action="https://slavachernyshev.us6.list-manage.com/subscribe/post?u=6c667c7166723a7e5c304db16&amp;id=b091b68b0f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">                    
                <div class="mc-field-group">
                  <label for="mce-EMAIL" class="sr-only">Email Address </label>
                  <input type="email" value="" name="EMAIL" class="required email w-full" id="mce-EMAIL" placeholder="Enter your email address">
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
                <div class="clear py-4"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button py-2 px-4"></div>
              </div>
            </form>
          </div>
          <!--End mc_embed_signup-->
        </div>
      </div>
      <div class="space-y-4">
        <div class="md:mt-52">Join over 33,000 readers for a densely curated weekly email with fresh discoveries at the intersection of technology, design, ethics and sustainability. Free of buzzwords, hype and FOMO.</div>
        <ul class="list-disc px-4">
            <li>Useful apps, tools, and websites</li>
            <li>Interesting books and accessories</li>
            <li>Inspiring art and design projects</li>
            <li>Thought-provoking things to read, listen, watch</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
</script>
