<template>
    <svg-icon type="mdi" :path="path"></svg-icon>
  </template>
  
  <script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiArrowLeftThinCircleOutline } from '@mdi/js';
  
  export default {
    name: "GoBackIcon",
    components: {
      SvgIcon
    },
    data() {
      return {
         path: mdiArrowLeftThinCircleOutline,
      }
    }
  }
  </script>