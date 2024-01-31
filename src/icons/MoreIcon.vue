<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
          style="background-color: transparent"
          variant="flat"
          icon="mdi-dots-vertical"
          v-bind="props"
      ></v-btn>
    </template>
    <v-list>
      <v-list-item id="item" v-for="(item, i) in items" :key="i">
        <v-list-item-title @click="item.action">{{
            item.title
          }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDotsVertical } from '@mdi/js'

export default {
  name: 'more-icon',
  components: {
    SvgIcon,
  },
  props: {
    items: Object,
  },
  data() {
    return {
      path: mdiDotsVertical,
      items: null,
    }
  },
  methods: {
    getItems() {
      this.items = this.$props.items
    },
  },
  created() {
    this.getItems()
  },
}
</script>

<style scoped>

#item {
  cursor: pointer;
}

#item:hover {
  background-color: #e1e1e1;
  transition-duration: 400ms;
}

</style>