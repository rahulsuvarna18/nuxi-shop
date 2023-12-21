<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <LoginSignInText text="Sign In" />
    <LoginBody />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Login",
});
</script>
