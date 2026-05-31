<script setup>
defineProps({
  dish: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="dish-card" :class="{ featured: dish.featured }">
    <figure class="dish-media">
      <img class="dish-image" :src="dish.image" :alt="dish.alt" loading="lazy" />
      <figcaption>{{ dish.categoryLabel }}</figcaption>
    </figure>
    <div class="dish-body">
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.description }}</p>
      <strong class="dish-price">¥{{ dish.price }}</strong>
    </div>
  </article>
</template>
