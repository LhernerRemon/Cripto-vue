<template>
  <v-footer color="third lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
      <v-col class="third lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>RrQq</strong>
      </v-col>
      <v-col class="third lighten-2 pb-5 text-center white--text" cols="12">
        <router-link to="/about" class="white--text myhover">
          About
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-linkedin',
      'mdi-instagram',
      'mdi-github',
      'mdi-gitlab'
    ]
  })
}
</script>
