<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-12-03 11:34:09
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-25 22:41:08
 * @FilePath: /hsl-ui/packages/menu/src/components/SubMenuItem.vue
-->
<template>
  <MenuItem v-if="!menuHasChildren(item) && getShowMenu" v-bind="$props" />
  <ElSubMenu v-if="menuHasChildren(item) && getShowMenu" :index="item.path">
    <template #title>
      {{ item.title }}
    </template>
    <template
      v-for="childrenItem in item.children || []"
      :key="childrenItem.path"
    >
      <SubMenuItem v-bind="$props" :item="childrenItem" />
    </template>
  </ElSubMenu>
  
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ElSubMenu } from 'element-plus'

import MenuItem from './MenuItem.vue'
export default defineComponent({
  name: 'SubMenuItem',
  isSubMenu: true,
  components: {
    MenuItem,
    ElSubMenu,
  },
  props: {
    item: Object,
    defaultActive: String,
  },
  setup(props) {
    const getShowMenu = computed(() => !(props.item as any).meta?.hideMenu)

    function menuHasChildren(menuTreeItem): boolean {
      return (
        !menuTreeItem.meta?.hideChildrenInMenu &&
        Reflect.has(menuTreeItem, 'children') &&
        !!menuTreeItem.children &&
        menuTreeItem.children.length > 0
      )
    }
    return {
      getShowMenu,
      menuHasChildren,
    }
  },
})
</script>
