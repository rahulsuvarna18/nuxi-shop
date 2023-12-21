<template>
  <div class="py-3 flex items-center justify-center gap-2">
    <span>Not a registered user? Click</span>
    <button
      @click="navigateTo('/signUp')"
      class="rounded-md bg-blue-600 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    >
      Here
    </button>
  </div>
</template>
