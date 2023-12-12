<template>
  <div>
    <div v-if="user">
      <!-- {{ user.user_metadata.name }}
      {{ user.user_metadata.picture }} -->
      {{ user }}
    </div>
    <h1>Login</h1>
    <button @click="googleLogin">Login with Google</button>
    <div>
      <h1>Sign Up with email</h1>
      <input type="email" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
      <input type="text" v-model="name" placeholder="Name" />
      <input type="checkbox" v-model="isAdmin" />
      <button @click="signUpWithEmail">Login with Email</button>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
    <div>
      <h1>Login with email</h1>
      <input type="email" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
      <!-- <input type="text" v-model="name" placeholder="Name" /> -->
      <input type="checkbox" v-model="isAdmin" />
      <button @click="loginWithEmail">Login with Email</button>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Login",
});

const email = ref("");
const password = ref("");
const name = ref("");
const isAdmin = ref(false);
const errorMsg = ref("");

const supabase = useSupabaseClient();

const user = useSupabaseUser();

async function googleLogin() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
    return;
  }
}

const signUpWithEmail = async () => {
  try {
    const { error } = await supabase.auth.signUp(
      {
        email: email.value,
        password: password.value,
        isAdmin: isAdmin.value,
      },
      {
        data: {
          first_name: name.value,
        },
      }
    );
    email.value = "";
    password.value = "";
    if (error) throw error;
    navigateTo("/");
  } catch (error) {
    errorMsg.value = error.message;
  }
};

const loginWithEmail = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
      // name: name.value,
    });
    email.value = "";
    password.value = "";
    if (error) throw error;
    console.log(data);
    navigateTo("/");
  } catch (error) {
    errorMsg.value = error.message;
  }
};

// watchEffect(() => {
//   if (user.value) {
//     return navigateTo('/');
//   } }

//britta.meyerling@gmail.com
// 123456
</script>
