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
import { mdiDotsVertical } from "@mdi/js";

export default {
  name: "MoreIcon",
  props: {
    items: Array,
  },
  data() {
    return {
      path: mdiDotsVertical,
    };
  },
};
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
