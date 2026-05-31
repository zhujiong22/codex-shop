<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { navItems } from "../data/restaurant";

const route = useRoute();
const isOpen = ref(false);
const isScrolled = ref(false);

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 24;
};

const closeNav = () => {
  isOpen.value = false;
};

onMounted(() => {
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollState);
});
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled || route.path !== '/' }">
    <RouterLink class="brand" to="/" aria-label="禾光小馆首页" @click="closeNav">
      <span class="brand-mark">禾</span>
      <span>禾光小馆</span>
    </RouterLink>

    <button
      class="nav-toggle"
      type="button"
      :aria-expanded="String(isOpen)"
      aria-controls="site-nav"
      @click="isOpen = !isOpen"
    >
      <span></span>
      <span></span>
      <span></span>
      <span class="sr-only">打开导航</span>
    </button>

    <nav id="site-nav" class="site-nav" :class="{ 'is-open': isOpen }" aria-label="主导航">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :class="{ 'is-active': route.path === item.to }"
        @click="closeNav"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
