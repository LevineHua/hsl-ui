<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-12-03 11:33:55
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-08 15:22:00
 * @FilePath: /finches-ui/packages/components/menu/src/components/MenuItem.vue
-->
<template>
  <ElMenuItem
    :index="item.path"
    :class="{ 'is-active': defaultActive === item.path }"
  >
    {{ item.title }}
  </ElMenuItem>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElMenuItem } from 'element-plus'
export default defineComponent({
  name: 'MenuItem',
  components: { ElMenuItem },
  props: {
    item: Object,
    defaultActive: String,
  },
})
</script>
