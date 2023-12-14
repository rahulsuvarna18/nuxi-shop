<template>
  <nav v-if="userDataLoaded">
    <NuxtLink to="/">Ice Cream Shop</NuxtLink>
    <div class="inner-box">
      <div class="info-box" v-if="user">
        <p>Hi {{ name ? name : "user" }}</p>
        <NuxtLink to="/cart">Cart</NuxtLink>
        <img
          v-if="profile"
          :src="profile"
          alt="avatar"
          @click="navigateTo('/profile/listings')"
          class="cursor-pointer"
        />
        <p v-else @click="navigateTo('/profile/listings')">Dashboard</p>
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <NuxtLink to="/cart">Cart</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) console.log(error);

  navigateTo("/");
}

const name = computed(() => user?.value.user_metadata.full_name);
const profile = computed(() => user?.value.user_metadata.picture);

const userDataLoaded = ref(false);

onMounted(() => {
  if (user) {
    userDataLoaded.value = true;
  }
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  overflow: hidden;
  background-color: hsla(0, 0%, 100%, 0);
  height: 7vh;
  font-size: 1.5rem;
}

.inner-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.info-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.info-box img {
  border-radius: 50%;
  height: 2.5rem;
}
</style>
