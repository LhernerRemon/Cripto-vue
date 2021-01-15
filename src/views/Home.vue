<template>
  <div>
    <px-assets-table :lista="assets" />
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
      assets: []
    };
  },
  mounted() {
    const URL = "https://api.coincap.io/v2";
    axios(`${URL}/assets/?limit=20`).then(response => {
      this.assets = response.data.data;
    });
  }
};
</script>
