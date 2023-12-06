<template>
  <div class="align-items-stretch"></div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
// import KTMenuPages from "@/layouts/default-layout/components/header/menu/MenuPages.vue";
import { version } from "@/core/helpers/system";
import { headerMenuDisplay } from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "header-menu",
  // components: {
  //   KTMenuPages,
  // },
  setup() {
    return {
      version,
      headerMenuDisplay,
      getAssetPath,
    };
  },
});
</script>
