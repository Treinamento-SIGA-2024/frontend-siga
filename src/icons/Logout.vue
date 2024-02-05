<template>
  <svg-icon class="logout" type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLogout } from '@mdi/js'

export default {
  name: 'Logout',
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiLogout,
    }
  },
}
</script>

<style>
.logout {
  color: black;
  cursor: pointer;
  transition: 0.15s;
}

.logout:hover {
  color: #fff;
}
</style>
