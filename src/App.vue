<template>
  <v-app>
    <cr-header />
    <v-fade-transition>
      <router-view />
    </v-fade-transition>
    <cr-footer />
  </v-app>
</template>

<script>
import CrHeader from '@/components/CrHeader'
import CrFooter from '@/components/CrFooter'
export default {
  name: 'App',
  components: {
    CrHeader,
    CrFooter
  }
}
</script>
