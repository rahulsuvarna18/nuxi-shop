<template>
  <v-container class="d-flex flex-col justify-center h-100">
    <LoginSignInText text="Sign Up" />

    <div class="mx-auto w-50">
      <LoginSignUpEmail />
    </div>
  </v-container>
</template>

<script setup lang="ts">
useHead({
  title: "Login",
});
</script>
