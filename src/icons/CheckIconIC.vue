<template>
  <svg-icon type="mdi" :path="path" size="50" width="100"></svg-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCheckCircleOutline } from '@mdi/js';

export default {
  name: 'my-component',
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiCheckCircleOutline,
    };
  },
};
</script>
