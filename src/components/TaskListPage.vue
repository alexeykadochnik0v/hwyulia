<template>
  <div class="task-list-page">
    <h2>Главная страница</h2>
    <div>
      <h3>Список задач</h3>
      <div class="content-list">
        <ul class="list-task">
          <li v-for="task in filteredTasks" :key="task.id">
            <router-link :to="'/task/' + task.id">{{ task.title }}</router-link>
            <p>Уровень сложности: {{ task.difficulty }}</p>
            <p>Категория: {{ task.category }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTaskStore } from '../stores/useTaskStore'

const taskStore = useTaskStore()

// Инициализируем store при монтировании компонента
onMounted(() => {
  taskStore.setTasks()
})

const filters = ref({
  difficulty: null,
  category: null
})

// Вычисляемое свойство для фильтрации задач
const filteredTasks = computed(() => {
  return taskStore.tasks.filter((task) => {
    const matchesDifficulty = filters.value.difficulty
      ? task.difficulty === filters.value.difficulty
      : true
    const matchesCategory = filters.value.category
      ? task.category === filters.value.category
      : true
    return matchesDifficulty && matchesCategory
  })
})
</script>

<style scoped>
.content-list {
  text-align: left;
}
.list-task {
  list-style: none;
  padding-inline-start: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.list-task li {
  padding: 10px 15px;
  border: 1px dotted #bdbdbd;
  border-radius: 10px;
}
.list-task a:hover {
  color: #f25353;
}
.list-task a {
  color: #3800ff;
}
@media (max-width: 450px) {
  h1 {
    font-size: 2em;
    line-height: 1.5;
  }
  .list-task {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
