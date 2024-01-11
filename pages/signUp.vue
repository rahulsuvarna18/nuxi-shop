<template>
  <v-container class="d-flex flex-col justify-center h-100">
    <LoginSignInText text="Sign Up" />

    <v-container class="mx-auto w-50">
      <LoginSignUpEmail />
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
useHead({
  title: "Login",
});
</script>
