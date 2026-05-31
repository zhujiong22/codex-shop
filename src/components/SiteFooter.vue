<script setup>
import { restaurantInfo } from "../data/restaurant";
</script>

<template>
  <footer class="footer">
    <div>
      <strong>{{ restaurantInfo.name }}</strong>
      <p>{{ restaurantInfo.address }} · {{ restaurantInfo.hours }}</p>
    </div>
    <div class="footer-links">
      <a :href="`tel:${restaurantInfo.tel}`">{{ restaurantInfo.phone }}</a>
      <a :href="`mailto:${restaurantInfo.email}`">{{ restaurantInfo.email }}</a>
    </div>
  </footer>
</template>
