<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <p>Or continue with</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          @click="googleLogin"
          color="#FF1744"
          rounded
          class="w-50"
          text="Google"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
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
