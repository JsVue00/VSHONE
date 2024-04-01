<template>
  <div class="min-h-[80vh]">
    <component :is="$route.meta.Layout || 'div'">
      <router-view></router-view>
    </component>
  </div>
  <footer>
    <div
      class="flex relative flex-col w-full min-h-[200px] bg-background1 text-text1 justify-center"
    >
      <div class="flex flex-col space-y-2 w-full h-full">
        <router-link to="#" class="flex group items-center space-x-2">
          <div class="w-[30px] h-[30px] rounded-full p-2 bg-background overflow-hidden">
            <img
              class="object-fill group-hover:scale-125"
              src="@/assets/icons/facebook.png"
              alt=""
            />
          </div>
          <span>Facebook</span>
        </router-link>
        <router-link to="#" class="flex group items-center space-x-2">
          <div class="w-[30px] h-[30px] rounded-full p-2 bg-background overflow-hidden">
            <img
              class="object-fill group-hover:scale-125"
              src="@/assets/icons/twitter.png"
              alt=""
            />
          </div>
          <span>Facebook</span>
        </router-link>
      </div>
      <span class="absolute w-full text-center bottom-0"> Copy right by: Senghong </span>
    </div>
  </footer>
</template>
