<template>
  <div class="task-page">
    <div v-if="currentTask">
      <h1>{{ currentTask.title }}</h1>
      <p><strong>Описание:</strong> {{ currentTask.description }}</p>
      <div v-if="currentTask.comments && currentTask.comments.length > 0">
        <h5>Комментарии:</h5>
        <div v-for="comment in currentTask.comments" :key="comment.id">
          <p>
            <strong>{{ comment.createdat }}:</strong> {{ comment.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Задача не найдена</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from '../stores/useTaskStore'

const route = useRoute()
const taskStore = useTaskStore()
const taskId = parseInt(route.params.id)

// Инициализируем store при монтировании компонента
taskStore.setTasks()

const currentTask = computed(() => {
  return taskStore.tasks.find(task => task.id === taskId)
})
</script>

<style scoped>
.task-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  color: #34495e;
}

.comments {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
</style>
