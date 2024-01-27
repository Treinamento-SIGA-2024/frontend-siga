<template>
    <svg-icon type="mdi" :path="path"></svg-icon>
  </template>
  
  <script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiPlus } from '@mdi/js';
  
  export default {
    name: "PlusIcon",
    components: {
      SvgIcon
    },
    data() {
      return {
         path: mdiPlus,
      }
    }
  }
  </script>