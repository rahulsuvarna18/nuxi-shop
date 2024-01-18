<template>
  <v-toolbar app>
    <v-btn to="/" text="Nuxi Shop"></v-btn>

    <v-spacer></v-spacer>

    <div>
      <v-row>
        <v-col class="d-flex align-center ga-3">
          <div v-if="user">
            <span class="mr-5">Hi {{ name ? name : "User" }}</span>

            <v-avatar v-if="profile != undefined" class="mr-2">
              <v-img alt="profile pic" :src="profile"></v-img>
            </v-avatar>

            <v-btn @click="navigateTo('/profile/listings')" icon>
              <v-icon>mdi-view-dashboard-variant</v-icon>
              <v-tooltip activator="parent" location="bottom">
                Dashboard
              </v-tooltip>
            </v-btn>

            <v-btn @click="logout" icon>
              <v-icon>mdi-logout-variant</v-icon>
              <v-tooltip activator="parent" location="bottom">
                Logout
              </v-tooltip>
            </v-btn>
          </div>

          <v-btn @click="navigateTo('/cart')" icon>
            <v-icon>mdi-cart</v-icon>
            <v-tooltip activator="parent" location="bottom"> Cart </v-tooltip>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-toolbar>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { value } = useSupabaseUser();
const supabase = useSupabaseClient();

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) console.log(error);

  navigateTo("/");
}

const name = computed(() =>
  user.value ? user.value.user_metadata.full_name : ""
);
const profile = computed(() =>
  user.value ? user.value.user_metadata.picture : ""
);

const userDataLoaded = ref(false);

onMounted(() => {
  if (user) {
    userDataLoaded.value = true;
  }
});
</script>

<style scoped>
.info-box img {
  border-radius: 50%;
  height: 2.5rem;
}
</style>
