<template>
  <div class="user-profile">
    <div v-if="currentUser">
      <h1>Профиль пользователя: {{ currentUser.username }}</h1>
      <p><strong>Решенные задачи:</strong> {{ currentUser.solvedTasks.length }}</p>
      <h2>Статистика:</h2>
      <ul>
        <li>Легкие: {{ currentUser.difficulty.easy }}</li>
        <li>Средние: {{ currentUser.difficulty.medium }}</li>
        <li>Сложные: {{ currentUser.difficulty.hard }}</li>
      </ul>
      <h2>Решенные задачи:</h2>
      <ul>
        <li v-for="task in currentUser.solvedTasks" :key="task.id_list">
          <router-link :to="'/task/' + task.id_list">{{ task.title }}</router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Пользователь не найден</p>
    </div>
    <router-link to="/" class="back-link">Назад к списку задач</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '../stores/useUserStore'
import { users } from '../api'

const route = useRoute()
const userStore = useUserStore()
const userId = parseInt(route.params.id)

const currentUser = computed(() => {
  return users.find(user => user.userid === userId)
})
</script>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  color: #3800ff;
  text-decoration: none;
}

.back-link:hover {
  color: #f25353;
}
</style>
