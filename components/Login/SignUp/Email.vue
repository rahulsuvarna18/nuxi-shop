<template>
  <v-container class="space-y-6">
    <v-row>
      <v-col>
        <v-label for="email" text="Email Address"></v-label>
        <v-text-field v-model="email" rounded variant="outlined"></v-text-field>
      </v-col>
    </v-row>

    <v-label text="Password"></v-label>
    <v-text-field v-model="password" variant="outlined" rounded></v-text-field>

    <v-btn
      @click="signUpWithEmail"
      color="indigo"
      rounded
      text="Sign up"
      width="8rem"
    ></v-btn>
  </v-container>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref<string>("");
const errorMsg = ref<string>("");

const supabase = useSupabaseClient();

const signUpWithEmail = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    email.value = "";
    password.value = "";
    if (error) throw error;
    navigateTo("/");
  } catch (error: any) {
    errorMsg.value = error.message;
  }
};
</script>
