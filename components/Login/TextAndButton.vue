<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          v-model="email"
          variant="outlined"
          rounded
          label="Email address"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          v-model="password"
          variant="outlined"
          rounded
          label="Password"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          @click="loginWithEmail"
          text="Sign In"
          rounded
          color="indigo"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const email = ref<string>("");
const password = ref<string>("");
const errorMsg = ref<string>("");

const supabase = useSupabaseClient();

const loginWithEmail = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
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
