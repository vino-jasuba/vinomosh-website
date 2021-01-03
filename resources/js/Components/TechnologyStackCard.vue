<template>
    <div class="bg-dusk p-8 mt-2 transform hover:scale-110 transition">
        <h3 class="uppercase text-xs font font-semibold tracking-widest">
            {{technology.category}}
        </h3>
        <h2 class="text-2xl">{{technology.name}}</h2>
        <p class="text-sx text-dawn">{{technology.summary}}</p>
        <div class="text-dawn text-xs ml-2">{{technology.stars}}</div>
    </div>
</template>

<script>
export default {
    props: ['technology'],
};
</script>

<style></style>
