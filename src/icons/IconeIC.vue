<template>
  <div class="container">
    <svg-icon class="icone" type="mdi" :path="path"></svg-icon>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiSchool } from '@mdi/js';

export default {
  name: 'ChapeuIC',
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiSchool,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icone {
  margin-top: 1rem;
  height: 4rem;
  width: 4rem;
}
</style>
