<template>
  <div :class="{ 'sidebar-close': !store.isShowSidebar }"
    class="sidebar h-[calc(100vh-50px)] bg-background1 overflow-x-hidden overflow-y-auto">
    <el-col>
      <el-menu v-for="(nav, index) in navPages" :key="index" class="el-menu-vertical-demo" @open="handleOpen"
        @close="handleClose">
        <el-sub-menu :index="nav.index" :style="{
          backgroundColor: nav.subMenu.some((sub) => $route.path.includes(sub.link))
            ? '#070150'
            : ''
        }">
          <template #title>
            <!-- <el-icon :icon="nav.icon"></el-icon> -->
            <span>{{ $t(nav.menu) }}</span>
          </template>
          <router-link v-for="(sub, index) in nav.subMenu" :key="index" :to="{ name: `${sub.pathName}` }">
            <el-menu-item :style="{
              backgroundColor: $route.name === sub.pathName ? 'var(--primary)' : '',
              color: $route.name === sub.pathName ? 'var(--secondary)' : 'white'
            }" index="1-1">{{ $t(sub.subMenuName) }}</el-menu-item>
          </router-link>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </div>
</template>
<script lang="ts" setup>
import { User, DataAnalysis } from '@element-plus/icons-vue';
import { appStore } from '@/stores';

const store = appStore();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const navPages = [
  {
    index: '1',
    icon: User,
    menu: 'user_management',
    subMenu: [
      { index: '1-1', subMenuName: 'user_list', pathName: 'userList', link: 'userList' },
    ]
  },
  {
    index: '2',
    icon: DataAnalysis,
    menu: 'quizzes',
    subMenu: [
      {
        index: '2-2',
        subMenuName: 'category_list',
        pathName: 'category-list',
        link: '/category-list'
      },
      { index: '2-2', subMenuName: 'sub_category_list', pathName: 'sub-category-list', link: '/sub-category-list' },
      {
        index: '2-2',
        subMenuName: 'create_new_quiz',
        pathName: 'create-new-quiz',
        link: '/create-new-quiz'
      },
      {
        index: '2-1',
        subMenuName: 'quiz_list',
        pathName: 'questionList',
        link: '/questionList'
      }
    ]
  },
  {
    index: '3',
    icon: DataAnalysis,
    menu: 'Tutorials and Courses',
    subMenu: [
      {
        index: '2-2',
        subMenuName: 'course_list',
        pathName: 'course-list',
        link: '/course-list'
      },
    ]
  },
  {
    index: '3',
    icon: DataAnalysis,
    menu: 'gography management',
    subMenu: [
      {
        index: '2-2',
        subMenuName: 'city_list',
        pathName: 'city-list',
        link: '/city-list'
      },
      {
        index: '2-2',
        subMenuName: 'province_list',
        pathName: 'province-list',
        link: '/province-list'
      },
      {
        index: '2-2',
        subMenuName: 'district_list',
        pathName: 'district-list',
        link: '/district-list'
      },
      {
        index: '2-2',
        subMenuName: 'tourist_site_list',
        pathName: 'tourist-site-list',
        link: '/tourist-site-list'
      },
    ]
  }
];
</script>
<style scoped>
.sidebar {
  width: 250px;
  transition: width 0.5s ease;
  box-sizing: border-box;
  float: left;
}

.sidebar-close {
  width: 0 !important;
}

@media screen and (max-width: 768px) {
  .sidebar {
    width: 0;
  }

  .sidebar-open {
    width: 250px;
  }
}
</style>
