<template>
  <div class="block-filter">
    <div class="label-block">
      <label class="label-name" for="difficulty">Сложность:</label>
      <select class="label-select" v-model="selectedDifficulty" @change="filterTasks">
        <option value="">Все</option>
        <option value="easy">Легкий</option>
        <option value="medium">Средний</option>
        <option value="hard">Сложный</option>
      </select>
    </div>
    <div class="label-block">
      <label class="label-name" for="category">Категория:</label>
      <select class="label-select" v-model="selectedCategory" @change="filterTasks">
        <option value="">Все</option>
        <option value="array">Массивы</option>
        <option value="string">Теория</option>
        <option value="dynamic">Динамическое программирование</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDifficulty: '',
      selectedCategory: '',
    }
  },
  methods: {
    filterTasks() {
      this.$emit('filter', {
        difficulty: this.selectedDifficulty,
        category: this.selectedCategory,
      })
    },
  },
}
</script>

<style scoped>
.block-filter {
  padding: 10px 20px;
  border: 1px dotted #bdbdbd;
  border-radius: 5px;
}
.label-name {
  padding: 5px 10px;
  font-weight: 700;
}
.label-select {
  padding: 5px 10px;
}
.label-block {
  margin: 10px 0px;
}

@media (max-width: 450px) {
  .label-block {
    margin: 10px;
  }
  .label-name {
    margin: 10px;
  }
  .label-select {
    margin: 10px 0px;
  }
}
</style>
