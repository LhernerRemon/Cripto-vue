<template>
  <v-app>
    <the-header />
    <v-fade-transition>
      <router-view />
    </v-fade-transition>
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
