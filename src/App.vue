<template>
  <div class="min-h-[80vh] w-full">
    <component :is="$route.meta.Layout || 'div'">
      <router-view></router-view>
    </component>
  </div>
</template>
