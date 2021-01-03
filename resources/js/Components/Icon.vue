<template>
    <a v-if="name === 'twitter'"
        href="https://twitter.com/_jasuba"
        target="_blank"
        rel="noopener noreferrer"
        class="flex ml-6 sm:ml-12 items-center"
    >
        <img class="w-4" :src="TwitterIcon" alt="twitter icon" />
        <span class="mx-2">Twitter</span>
        <img class="w-4" :src="ExternalLinkIcon" alt="go to twitter" />
    </a>
    <a v-else-if="name === 'github'"
        href="https://github.com/vino-jasuba"
        target="_blank"
        rel="noopener noreferrer"
        class="flex ml-6 sm:ml-12 items-center"
    >
        <img class="w-4" :src="GithubIcon" alt="github icon" />
        <span class="mx-2">GitHub</span>
        <img class="w-4" :src="ExternalLinkIcon" alt="go to github" />
    </a>
</template>

<script>
import TwitterIcon from "../../assets/twitter.svg";
import GithubIcon from "../../assets/github.svg";
import ExternalLinkIcon from "../../assets/external-link.svg";

export default {
    props: {
        name: {String}
    },
    data() {
        return {
            TwitterIcon,
            GithubIcon,
            ExternalLinkIcon,
        }
    }
};
</script>

<style></style>
