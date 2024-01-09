<template>
  <v-container class="d-flex flex-col justify-center h-100">
    <LoginSignInText text="Sign In" />
    <LoginBody />
  </v-container>
</template>

<script setup lang="ts">
useHead({
  title: "Login",
});
</script>
