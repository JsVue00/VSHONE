<template>
  <div class="flex flex-col justify-center items-center w-full bg-background2 min-h-screen">
    <span class="text-text3 text-[60px] font-bold text-center"
      >Page <br />
      Not Found</span
    >
    <div>
      <button
        class="px-3 py-0.5 rounded-md bg-background mx-2 hover:opacity-75"
        @click="$router.push({ name: 'home' })"
      >
        Home Page
      </button>
      <button
        class="px-3 py-0.5 rounded-md bg-background mx-2 hover:opacity-75"
        @click="$router.push({ name: 'admin' })"
      >
        Dashboard
      </button>
    </div>
  </div>
</template>
