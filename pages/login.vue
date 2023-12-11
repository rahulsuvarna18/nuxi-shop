<template>
  <div>
    {{ data }}
    <div v-if="user">
      {{ user.user_metadata.name }}
      {{ user.user_metadata.picture }}
    </div>
    <h1>Login</h1>
    <button @click="login">Login with Google</button>
  </div>
</template>

<script setup>
useHead({
  title: "Login",
});
const supabase = useSupabaseClient();

const user = useSupabaseUser();

const data = ref([]);

async function login() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
    return;
  }

  // const { data, error: fetchError } = await supabase
  //   .from("users")
  //   .select("isAdmin")
  //   .eq("id", user.id);

  // this.data = data;

  // console.log(data);
}
</script>
