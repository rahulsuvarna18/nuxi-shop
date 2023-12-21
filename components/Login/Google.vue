<template>
  <p class="mt-10 text-center text-sm text-gray-500">
    <a
      href="#"
      class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >Or continue with</a
    >
    <button
      @click="googleLogin"
      type="submit"
      class="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
    >
      Google
    </button>
  </p>
</template>

<script setup>
const supabase = useSupabaseClient();

async function googleLogin() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
    return;
  }
}
</script>
