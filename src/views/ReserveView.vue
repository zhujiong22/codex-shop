<script setup>
import { ref } from "vue";

const today = new Date().toISOString().split("T")[0];
const message = ref("");
const form = ref({
  name: "",
  guests: "2",
  date: today,
  time: "18:00",
  note: "",
});

const submitReservation = () => {
  message.value = `${form.value.name}，已收到 ${form.value.date} ${form.value.time} 的 ${form.value.guests} 位预订，我们会尽快与您确认。`;
  form.value = {
    name: "",
    guests: "2",
    date: today,
    time: "18:00",
    note: "",
  };
};
</script>

<template>
  <section class="page-hero reserve-hero">
    <span class="section-kicker">订位</span>
    <h1>留一张今晚的桌子</h1>
    <p>填写人数、日期和时间；如果有生日、靠窗或忌口需求，也可以一起备注。</p>
  </section>

  <section class="reserve page-section">
    <form class="reserve-form" @submit.prevent="submitReservation">
      <label>
        姓名
        <input v-model.trim="form.name" type="text" name="name" placeholder="请输入姓名" required />
      </label>
      <label>
        人数
        <select v-model="form.guests" name="guests" required>
          <option value="2">2 位</option>
          <option value="3">3 位</option>
          <option value="4">4 位</option>
          <option value="6">5-6 位</option>
        </select>
      </label>
      <label>
        日期
        <input v-model="form.date" type="date" name="date" :min="today" required />
      </label>
      <label>
        时间
        <select v-model="form.time" name="time" required>
          <option>18:00</option>
          <option>18:30</option>
          <option>19:00</option>
          <option>19:30</option>
          <option>20:00</option>
        </select>
      </label>
      <label class="form-wide">
        备注
        <textarea v-model.trim="form.note" name="note" rows="4" placeholder="生日、靠窗、忌口等"></textarea>
      </label>
      <button class="button button-primary form-wide" type="submit">提交预订</button>
      <p class="form-message form-wide" role="status" aria-live="polite">{{ message }}</p>
    </form>
  </section>
</template>
