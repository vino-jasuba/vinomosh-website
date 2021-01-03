<template>
  <div class="text-white lg:relative bg-night">
    <div class="left-0 sm:static md:static sm:px-8 sm:pt-12 md:px-16 md:pt-12 lg:h-screen lg:px-56 lg:pt-48 lg:flex lg:flex-col lg:fixed">
      <div class="p-8 lg:p-0">
        <h1 class="text-2xl md:px-8 lg:text-4xl">You&apos;ve reached</h1>
        <h1 class="text-3xl md:px-8 lg:text-6xl">Vincent Omondi.</h1>
      </div>
      <div class="p-8 text-dawn text-sm leading-relaxed tracking-wider lg:p-12 lg:mt-8 max-w-lg">
        I’m a Software Engineer currently working with PHP as Backend Developer for the Squad at&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://ibuild.global">iBUILD</inertia-link>. Imostly do API development, and I’m a&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://laravel.com">Laravel</inertia-link>&nbsp;evangelist. I take every opportunity I get to remind everyone that PHP is not&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://kinsta.com/blog/is-php-dead/">dead</inertia-link>. I also dabble in front-end development and I absolutely love pairing
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">Tailwind CSS </inertia-link>&nbsp;with
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React.Js</inertia-link>.&nbsp;Drop me an&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="mailto:info@vinomosh.me">email</inertia-link>&nbsp;if you think we're a good fit or if you just want to listen to me talk about&nbsp;
        <inertia-link class="text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=one+piece">One Piece</inertia-link>
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
            "The framework for web artisans and my goto tool when building amazing web solutions without sweating the small things",
          stars: ""
        },
        {
          category: "javascript",
          name: "React.Js",
          summary: "How can anybody not like React?",
          stars: ""
        },
        {
          category: "containerd",
          name: "Docker",
          summary: "Containerizing applications since 2018",
          stars: ""
        },
        {
          category: "cloud",
          name: "AWS",
          summary:
            "Experienced in leveraging the rich ecosystem of AWS services for reliable application deployments",
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