<script lang="ts" setup>
import { getAssetPath } from "@/core/helpers/assets";

</script>

<template>
  <div class="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
    <img
      class="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
      :src="getAssetPath('media/illustrations/sketchy-1/4.png')"
      alt=""
    />
    <br /><br />
    <h1 class="text-capitalize">{{ $route.name }} coming soon...</h1>
  </div>
</template>
