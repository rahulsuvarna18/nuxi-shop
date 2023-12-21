<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <LoginSignInText text="Sign Up" />

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoginSignUpEmail />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Login",
});
</script>
