<template>
  <v-container class="space-y-6">
    <v-row>
      <v-col>
        <v-label for="email" text="Email Address"></v-label>
        <v-text-field v-model="email" rounded outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-label text="Password"></v-label>
        <v-text-field
          v-model="password"
          required
          rounded
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          @click="signUpWithEmail"
          color="indigo"
          rounded
          text="Sign up"
          width="8rem"
        ></v-btn>
      </v-col>
    </v-row>
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
