<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLogout } from '@mdi/js';

export default {
  name: "Logout",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiLogout,
    }
  }
}
</script>