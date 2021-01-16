<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :lista="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import axios from "axios";

export default {
  name: "Home",
  components: {
    PxAssetsTable
  },
  data() {
    return {
      assets: [],
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    const URL = "https://api.coincap.io/v2";
    axios(`${URL}/assets/?limit=20`)
      .then(response => {
        this.assets = response.data.data;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
};
</script>
