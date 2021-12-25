<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-08-06 15:31:29
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-25 22:41:29
 * @FilePath: /hsl-ui/packages/menu/src/index.vue
-->
<template>
  <div class="cb-menu">
    <el-aside width="auto" style="background: #fff">
      <div class="container-menu">
        <div class="main-menu-wrapper">
          <a :href="homePath" class="logo">
            <img :src="webLogo" />
          </a>
          <div class="main-menu">
            <div
              v-if="showHomeMenu"
              class="main-menu-link"
              :class="{ active: homePath === currentActiveMenu.path }"
              @click="handleMenuClick(homePath)"
            >
              <img :src="webLogo" />
              首页
            </div>
            <div
              v-for="(item, index) in menuList"
              :key="index"
              class="main-menu-link"
              :class="{
                active:
                  item.path === currentActiveMenu.path ||
                  (item.redirect &&
                    item.redirect === currentActiveMenu.redirect),
              }"
              @click="handleMenuClick(item)"
            >
              <img :src="item.meta.icon || webLogo" />
              {{ item.title }}
            </div>
          </div>
        </div>
        <div
          v-if="childMenuList.length && !menuHasChildren(childMenuList)"
          class="main-menu-sider"
        >
          <div class="menu-title">
            {{
              currentActiveMenu.meta?.menuTitle || currentActiveMenu.meta?.title
            }}
          </div>
          <el-menu
            class="el-menu-vertical-demo"
            :router="true"
            :default-active="getDefaultActive"
          >
            <template v-for="item in childMenuList" :key="item.path">
              <SubMenuItem :item="item" :default-active="getDefaultActive" />
            </template>
          </el-menu>
        </div>
      </div>
    </el-aside>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, unref, ref } from 'vue'

import { ElMenu, ElAside } from 'element-plus'
import { isString } from 'lodash-es'
import SubMenuItem from './components/SubMenuItem.vue'

export default defineComponent({
  name: 'ElMenu',
  components: { SubMenuItem, ElMenu, ElAside },
  props: {
    menus: Array,
    // 是否在一级菜单显示首页按钮
    showHomeMenu: {
      type: Boolean,
      default: true,
    },
    // 首页路径
    homePath: {
      type: String,
      default: '/',
    },
    // 网站logo
    webLogo: {
      type: String,
      default: '',
      required: true,
    },
    useRouter: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
    
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { currentRoute, push, resolve } = props.useRouter()

    // 当前打开的一级菜单
    const currentActiveMenu = ref({})
    // 当前打开的一级菜单的 path
    const currentParentPath = ref('')

    const propsRef = computed(() => {
      return props
    })

    // 菜单
    const menuList = computed(() => {
      return unref(propsRef).menus
    })

    // 二级及以下菜单
    const childMenuList = computed(() => {
      const menus = unref(menuList) as []
      const parent = unref(currentRoute).matched[0]
      const key = parent.path

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      currentActiveMenu.value = parent

      // const key = unref(currentParentPath)

      const parentIndex = menus.findIndex((val: any) => val.path === key)

      const list = (menus[parentIndex] as any)?.children || []

      return list.filter((val) => !(val as any).meta?.hideMenu)
    })

    // 当前触发的路由
    const getDefaultActive = computed(() => {
      const { path, meta } = unref(currentRoute)
      if (meta && meta.currentActiveMenu) {
        return meta.currentActiveMenu
      } else {
        return path
      }
    })

    // 切换菜单
    function handleMenuClick(route: [string, Object]) {
      // currentParentPath.value = path
      if (isString(route)) {
        push(route)
      } else {
        const { path, meta } = route as any
        if (meta && meta.newWindow) {
          window.open(
            resolve({
              path,
            }).href,
            '_blank'
          )
        } else {
          push(path)
        }
      }
    }

    function menuHasChildren(menuTreeItem): boolean {
      return (
        !menuTreeItem.meta?.hideChildrenInMenu &&
        Reflect.has(menuTreeItem, 'children') &&
        !!menuTreeItem.children &&
        menuTreeItem.children.length > 0
      )
    }

    return {
      menuList,
      childMenuList,
      currentActiveMenu,
      handleMenuClick,
      menuHasChildren,
      getDefaultActive,
    }
  },
})
</script>
