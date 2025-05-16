<!-- layouts/default.vue -->
<template>
    <v-app>

        <v-layout class="Layout">
          
          <v-main>
            <slot />
          </v-main>
          

          <Navigation />
        </v-layout>
    </v-app>
  </template>
  <style scoped>
.Layout{
  display: flex;
  flex-direction: column;
}
</style>