import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userid: 0,
    username: null,
    role: null,
    solvedTasks: [],
    difficulty: {
      easy: 0,
      medium: 0,
      hard: 0,
    },
  }),
  actions: {
    setUserName(user) {
      this.username = user
      this.userid = user.userid
      this.role = user.role
      this.solvedTasks = user.solvedTasks
      this.difficulty = user.difficulty
    },
    removeUserName(user) {
      this.username = user
      this.userid = user.userid
      this.role = user.role
      this.solvedTasks = user.solvedTasks
      this.difficulty = user.difficulty
    },
  },
})
