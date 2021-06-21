<template>
  <v-card width="1100">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-left">
              <h3>Ranking</h3>
            </th>
            <th class="text-left">
              <h3>Nombre</h3>
            </th>
            <th class="text-left">
              <h3>Precio</h3>
            </th>
            <th class="text-left">
              <h3>Cap. de Mercado</h3>
            </th>
            <th class="text-left">
              <h3>Variación 24hs</h3>
            </th>
            <th class="font-weight-light" style="max-width:250px">
              <v-text-field
                label="Buscar"
                v-model="search"
                clearable
                color="third"
                prepend-icon="mdi-magnify"
              >
              </v-text-field>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in filterAssets" :key="c.id" style="height:65px">
            <td>
              <v-img
                :src="
                  `https://static.coincap.io/assets/icons/${c.symbol.toLowerCase()}@2x.png`
                "
                alt="c.id"
                max-height="55px"
                max-width="55px"
              ></v-img>
            </td>
            <td>{{ c.rank }}</td>
            <td>
              <div class="d-flex">
                <router-link to="/" class="text-subtitle-1 myhover">{{
                  c.name
                }}</router-link>
                <div class="grey--text ml-2 align-self-center">
                  {{ c.symbol }}
                </div>
              </div>
            </td>
            <td>{{ c.priceUsd | df }}</td>
            <td>{{ c.marketCapUsd | df }}</td>
            <td>{{ c.changePercent24Hr | pf }}</td>
            <td><v-btn color="third" outlined>Detalle</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "CrTable",
  data() {
    return {
      search: "",
    };
  },
  computed:{
    filterAssets() {
      if (!this.search) {
        return this.cryptos;
      }
      return this.cryptos_all.filter(
        a =>
          a.symbol.toLowerCase().includes(this.search.toLowerCase()) ||
          a.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }

  },
  props: {
    cryptos: Array,
    cryptos_all: Array,
    loaderTable: Boolean,
  },
};
</script>
<style>
.input-weight {
  max-width: 250px;
  font-weight: 400;
}
.myhover {
  text-decoration: none;
}
.myhover:hover {
  text-decoration: underline;
}
</style>
