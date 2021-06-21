<template>
  <v-card color="basil" class="pt-15 mt-10 pb-15">
    <v-card-title class="text-center justify-center py-6 pt-15">
      <h1 class="font-weight-bold display-3 black--text">
        RrQq
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab href="#aaa">
        AAA
      </v-tab>
      <v-tab href="#bbb">
        BBB
      </v-tab>
      <v-tab href="#ccc">
        CCC
      </v-tab>
      <v-tab href="#ddd">
        DDD
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="aaa">
        <v-card color="basil" flat>
          <v-card-text>AAAAAAAAAAA</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item value="bbb">
        <v-card color="basil" flat>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="ccc">
        <v-card color="basil" flat>
          <v-card-text>AAAAAAAAAAA</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="ddd">
        <v-card color="basil" flat>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      lorem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam officiis quaerat nostrum fugit consequuntur nam error rerum ducimus, molestiae quidem earum facere similique praesentium natus ipsa distinctio, alias vel cumque!",
    };
  },
};
</script>
