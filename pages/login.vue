<!-- <template>
  <div>
    <div v-if="user">
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
      <input type="text" v-model="name" placeholder="Name" />
      <input type="checkbox" v-model="isAdmin" />
      <button @click="loginWithEmail">Login with Email</button>
      <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
  </div>
</template> -->

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      /> -->
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <!-- <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div> -->
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            @click="loginWithEmail"
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </div>
      <div class="py-3 flex items-center justify-center gap-2">
        <span>Not a registered user? Click</span>
        <button
          class="rounded-md bg-blue-600 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Here
        </button>
      </div>

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
