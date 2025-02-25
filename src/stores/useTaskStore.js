import { defineStore } from 'pinia'
import { tasks } from '../api'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [], // Изначально пустой массив
    error: null,
  }),
  actions: {
    setTasks() {
      this.tasks = tasks // Устанавливаем импортированные задачи в состояние
    },
  },
  getters: {
    taskCount: (state) => state.tasks.length, // Геттер для получения количества задач
  },
})
