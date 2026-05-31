<template>
  <section class="hero" aria-label="禾光小馆餐厅首页">
    <div class="hero-bg" role="img" aria-label="暖光下的餐厅吧台和座位"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow">时令餐厅 · 城市晚餐</p>
      <h1>禾光小馆</h1>
      <p class="hero-copy">用当季食材、明火香气和安静服务，留住一顿饭该有的松弛感。</p>
      <div class="hero-actions">
        <RouterLink class="button button-primary" to="/reserve">预订餐桌</RouterLink>
        <RouterLink class="button button-ghost" to="/menu">查看菜单</RouterLink>
      </div>
    </div>
    <aside class="hero-note" aria-label="今日推荐">
      <span>今日推荐</span>
      <strong>慢烤番茄牛肋排</strong>
      <small>18:00 后供应</small>
    </aside>
  </section>

  <section class="intro" aria-label="餐厅亮点">
    <div>
      <span class="section-kicker">从厨房到餐桌</span>
      <h2>一间适合认真吃饭，也适合慢慢聊天的餐厅。</h2>
    </div>
    <div class="intro-grid">
      <article>
        <span>01</span>
        <h3>时令菜单</h3>
        <p>每两周更新主菜和甜点，保留少量稳定招牌，兼顾新鲜感和熟悉感。</p>
      </article>
      <article>
        <span>02</span>
        <h3>开放厨房</h3>
        <p>炭烤、煎封、慢炖的香气会被看见，出品节奏也更透明。</p>
      </article>
      <article>
        <span>03</span>
        <h3>轻松订位</h3>
        <p>两人小桌、朋友聚餐和纪念日座位都可以提前备注安排。</p>
      </article>
    </div>
  </section>
</template>
