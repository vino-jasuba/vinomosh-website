<template>
  <div class="text-white lg:relative bg-night">
    <div class="left-0 sm:static md:static sm:px-8 sm:pt-12 md:px-16 md:pt-12 lg:h-screen lg:px-56 lg:pt-48 lg:flex lg:flex-col lg:fixed">
      <div class="p-8 lg:p-0">
        <h1 class="text-2xl md:px-8 lg:text-4xl">You&apos;ve reached</h1>
        <h1 class="text-3xl md:px-8 lg:text-6xl">Vincent Omondi.</h1>
      </div>
      <div class="p-8 text-dawn text-sm leading-relaxed tracking-wider lg:p-12 lg:mt-8 max-w-lg">
        Hellooo 👋🤠, I’m a Software Developer currently working for the Squad at&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://ibuild.global">iBUILD</inertia-link>. As a&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://laravel.com">Laravel</inertia-link>&nbsp;evangelist, I take every opportunity I get to remind everyone that PHP is not&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://kinsta.com/blog/is-php-dead/">dead</inertia-link>! Now I know what you're thinking, and the answer is yes. I can do more than backend development. A student of design, I have learnt the modern art of
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">Tailwind CSS.</inertia-link> I'm also a journeyman in the art of the SPA with my weapons of choice being
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React.Js</inertia-link> and <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://reactjs.org">Vue.Js</inertia-link>.&nbsp;Light up a&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="mailto:info@vinomosh.me">smoke signal</inertia-link>&nbsp;if you think we can enjoy a working relationship or if you just want to chat about&nbsp; anime (cough* 👀, I mean military tactics 🤓).
      </div>
      <div class="p-8">
        <div class="flex">
          <img class="w-16 h-16 object-cover rounded-full" :src="VincentFaceShot" alt="Vincent Odhiambo's Headshot"/>
          <icon name="twitter" />
          <icon name="github" />
        </div>
        <div class="mt-8 text-xs text-dawn leading-loose">
          <div>
            Inspired by &nbsp;
            <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://sarahdayan.dev/">Sarah Dayan.</inertia-link>&nbsp;
          </div>
          <div>
            Original Design by &nbsp;<inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/NicolasMzrd">Nicolas Meuzard.</inertia-link>
          </div>
        </div>
      </div>
    </div>
    <div class="static flex justify-center sm:mt-8 md:mt-0 lg:absolute md:right-0 w-full lg:w-1/2 lg:pr-56 lg:pt-48">
      <div class="mt-8 mx-8 md:mt-0 md:w-full md:px-8 fade-group">
        <technology-stack-card v-for="(technology, key) in technologies" :key="key" :technology="technology" />
      </div>
    </div>
    <!-- Blur effect on scroll end -->
    <div class="z-20 bottom-0 w-full h-16 sticky gradient-fade lg:hidden"></div>
  </div>
</template>

<script>
import Icon from "@/Components/Icon.vue";
import TechnologyStackCard from "@/Components/TechnologyStackCard.vue";
import VincentFaceShot from "../../../assets/images/vincent2.jpeg"
export default {
  components: { TechnologyStackCard, Icon },
  data() {
    return {
      technologies: [
        {
          category: "php",
          name: "Laravel",
          summary:
            "Also known as the citadel of kings and queens ;) artisan inspire",
          stars: ""
        },
        {
          category: "javascript",
          name: "React.Js",
          summary: "We can get on a call if you need some context",
          stars: ""
        },
        {
          category: "containerd",
          name: "Docker",
          summary: "Because I'm committed to getting it to work on your machine too",
          stars: ""
        },
        {
          category: "cloud",
          name: "AWS",
          summary:
            "It's magic! Okay, maybe not exactly but it's powering this site ... magical!",
          stars: ""
        }
      ],
      VincentFaceShot,
    };
  }
};
</script>

<style>
</style>