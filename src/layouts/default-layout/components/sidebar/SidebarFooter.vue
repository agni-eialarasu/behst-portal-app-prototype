<template>
  <!--begin::Footer-->
  <div
    class="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
    id="kt_app_sidebar_footer"
  >
    <button
      @click="signOut()"
      class="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
      data-bs-toggle="tooltip"
      data-bs-trigger="hover"
      data-bs-dismiss-="click"
      title="Sign Out from the app"
    >
      <span class="btn-label">Sign Out</span>
      <KTIcon icon-name="exit-right" icon-class="btn-icon fs-2 m-0" />
    </button>
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "sidebar-footer",
  components: {},
  setup() {
    const router = useRouter();
    const store = useAuthStore();

    const signOut = () => {
      store.logout();
      router.push({ name: "sign-in" });
    };

    return {
      getAssetPath,
      signOut,
    };
  },
});
</script>
