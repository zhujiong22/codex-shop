<script setup>
import { restaurantInfo } from "../data/restaurant";
</script>

<template>
  <section class="page-hero visit-hero">
    <span class="section-kicker">到店</span>
    <h1>在梧桐路的晚风里见</h1>
    <p>步行、打车或临时来一杯茶，都能很轻松地找到我们。</p>
  </section>

  <section class="visit page-section">
    <div class="visit-panel">
      <span>地址</span>
      <strong>{{ restaurantInfo.address }}</strong>
      <p>近地铁 10 号线梧桐路站，步行约 6 分钟。</p>
    </div>
    <div class="visit-panel">
      <span>营业时间</span>
      <strong>{{ restaurantInfo.hours }}</strong>
      <p>每周一休息，节假日营业安排会提前更新。</p>
    </div>
    <div class="visit-panel">
      <span>联系</span>
      <strong>{{ restaurantInfo.phone }}</strong>
      <p>
        <a :href="`tel:${restaurantInfo.tel}`">电话订位</a>
        ·
        <a :href="`mailto:${restaurantInfo.email}`">发送邮件</a>
      </p>
    </div>
  </section>
</template>
