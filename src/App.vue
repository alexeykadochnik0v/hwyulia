<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="logo-site">
      <img alt="Vue logo" class="logo" src="@/assets/iconSvg.svg" width="50" height="50" />
      <h1>Аналог сайта LeetCode</h1>
    </div>
    <div>
      <nav class="link-page">
        <RouterLink to="/">Список задач</RouterLink>
        <RouterLink to="/user/1">Профиль пользователя</RouterLink>
      </nav>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.logo-site {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.logo-site img {
  margin: 5px 10px;
}
h1 {
  text-align: center;
}
.link-page {
  margin: 10px auto;
}
.link-page a {
  padding: 5px;
  margin: 10px 20px;
  border: 1px solid red;
  border-radius: 5px;
}
</style>
