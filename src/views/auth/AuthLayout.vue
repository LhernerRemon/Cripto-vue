<template>
  <v-app>
    <v-fade-transition>
      <router-view />
    </v-fade-transition>
    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheFooter
  }
}
</script>
