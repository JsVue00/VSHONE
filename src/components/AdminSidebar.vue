<template>
  <div class="h-[calc(100vh-50px)] w-[250px] bg-background1 overflow-y-auto">
    <el-col>
      <el-menu
        v-for="(nav, index) in navPages"
        :key="index"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu :index="nav.index">
          <template #title>
            <!-- <el-icon :icon="nav.icon"></el-icon> -->
            <span>{{ $t(`sidebar.${nav.menu}`) }}</span>
          </template>
          <router-link
            v-for="(sub, index) in nav.subMenu"
            :key="index"
            :to="{ name: `${sub.pathName}` }"
          >
            <el-menu-item
              :style="{
                backgroundColor: $route.path.includes(sub.link) ? 'var(--primary)' : '',
                color: $route.path.includes(sub.link) ? 'var(--secondary)' : 'white'
              }"
              index="1-1"
              >{{ $t(`sidebar.${sub.subMenuName}`) }}</el-menu-item
            >
          </router-link>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </div>
</template>
<script lang="ts" setup>
import { User, DataAnalysis } from '@element-plus/icons-vue';
// import { ref, computed } from 'vue';
// import { useRoute } from 'vue-router';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// const isOpen = (): string => {
//   return '1';
// };

const navPages = [
  {
    index: '1',
    icon: User,
    menu: 'user_management',
    subMenu: [{ index: '1-1', subMenuName: 'user_list', pathName: 'userList', link: 'userList' }]
  },
  {
    index: '2',
    icon: DataAnalysis,
    menu: 'question',
    subMenu: [
      {
        index: '2-1',
        subMenuName: 'question_list',
        pathName: 'questionList',
        link: '/questionList'
      },
      { index: '2-2', subMenuName: 'user_list', pathName: 'questionList', link: '/#' }
    ]
  }
];
</script>
