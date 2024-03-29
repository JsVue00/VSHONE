<template>
    <div>
        <router-view></router-view>
        <button @click="$router.push('/games')">Games</button>
    </div>
</template>