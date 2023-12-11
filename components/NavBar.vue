<template>
  <nav v-if="userDataLoaded">
    <NuxtLink to="/">Ice Cream Shop</NuxtLink>
    <div class="inner-box">
      <div class="info-box" v-if="user">
        <p>Hi {{ name }}</p>
        <NuxtLink to="/cart">Cart</NuxtLink>
        <img
          :src="profile"
          alt="avatar"
          @click="navigateTo('/profile/listings')"
          class="cursor-pointer"
        />
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <NuxtLink to="/cart">Cart</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<!-- <template>
  <nav>
    <NuxtLink v-pre to="/">Ice Cream Shop</NuxtLink>
    <div class="inner-box">
      <div v-if="user" class="info-box">
        <p>Hi {{ name }}</p>
        <NuxtLink v-pre to="/cart">Cart</NuxtLink>
        <img :src="profile" alt="avatar" />
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <NuxtLink to="/cart">Cart</NuxtLink>
      </div>
    </div>
  </nav>
</template> -->

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) console.log(error);

  // user.value = null;
  navigateTo("/");
}

const name = computed(() => user?.value.user_metadata.full_name);
const profile = computed(() => user?.value.user_metadata.picture);

// console.log(profile.value);

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
  /* border: 1px solid black; */
  padding: 1rem 2rem;
  /* width: 98.7vw; */
  /* width: 100vw; */
  overflow: hidden;
  background-color: hsla(0, 0%, 100%, 0);
  /* opacity: 0.5; */
  height: 7vh;
  /* color: white; */
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
