<script setup>
import { computed, ref } from "vue";
import DishCard from "../components/DishCard.vue";
import { dishes } from "../data/restaurant";

const filters = [
  { label: "全部", value: "all" },
  { label: "前菜", value: "starter" },
  { label: "主菜", value: "main" },
  { label: "饮品", value: "drink" },
  { label: "甜点", value: "dessert" },
];

const activeFilter = ref("all");

const filteredDishes = computed(() => {
  if (activeFilter.value === "all") {
    return dishes;
  }

  return dishes.filter((dish) => dish.category === activeFilter.value);
});
</script>

<template>
  <section class="page-hero menu-hero">
    <span class="section-kicker">菜单</span>
    <h1>今天想吃什么？</h1>
    <p>菜单围绕时令、明火和适合分享的餐桌节奏展开。</p>
  </section>

  <section class="menu-section page-section">
    <div class="menu-tabs" role="tablist" aria-label="菜单分类">
      <button
        v-for="filter in filters"
        :key="filter.value"
        class="tab"
        :class="{ 'is-active': activeFilter === filter.value }"
        type="button"
        @click="activeFilter = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>
    <div class="menu-grid">
      <DishCard v-for="dish in filteredDishes" :key="dish.id" :dish="dish" />
    </div>
  </section>
</template>
