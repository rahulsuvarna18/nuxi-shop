<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet>
          <v-card-title class="text-center">
            <h5 class="font-weight-bold">{{ text }} to your account</h5>
          </v-card-title>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
interface Text {
  text: string;
}

const props = defineProps<Text>();
</script>
