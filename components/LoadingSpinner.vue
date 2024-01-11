<template>
  <div class="loading">
    <div class="spinner">
      <v-progress-circular
        model-value="20"
        indeterminate
        class="d-flex align-center justify-center"
        color="teal"
        :size="80"
      ></v-progress-circular>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(207, 207, 207, 0.44);
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -25px;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}
</style>
