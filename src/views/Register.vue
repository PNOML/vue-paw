<template>
  <div>
    <form class="register-form">
      <h1>Регистрация</h1>
      <input
        type="text"
        placeholder="Ваше имя"
        class="register-user-inp"
      >
      <input
        type="email"
        placeholder="Ваше Email"
        class="register-user-inp"
      >
      <input
        type="password"
        placeholder="Придумайте пароль"
        class="register-user-inp"
      >
      <input
        type="submit"
        value="Создать аккаунт"
        class="register-signup-btn"
      >
      <div class="register-has-acc">
        <span>Уже есть аккаунт? \ </span>
        <a href="#">Войти</a>
      </div>
    </form>
  </div>
</template>