<template>
  <svg-icon class="PersonalData" type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount } from '@mdi/js';

export default {
  name: "PersonalData",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiAccount,
    }
  }
}
</script>

<style>
.PersonalData {
  height: 60px;
  width: 60px;
  color: #3a3a3a;
}
</style>