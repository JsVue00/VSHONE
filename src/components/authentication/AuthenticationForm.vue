<template>
    <div class="flex w-full justify-center items-center p-5">

        <div class="flex  max-w-[800px] rounded-md hover:shadow-md min-w-[500px] max-h-[90vh]  overflow-hidden">
            <div class="flex flex-col h-[600px] w-[400px] bg-background2">

                <img class=" object-fill h-full w-full" src="@/assets/images/loginImage.jpg" alt="">
                <div class="text-center h-[100px] text-text1">
                    <span class=" text-text03 font-bold text-[24px]">Welcome</span>
                    <p>Will be your daily working, you can manage your tasks</p>
                </div>
            </div>
            <div class=" p-10 w-[400px] space-y-4">

                <!-- Noted -->
                <div class="mb-4">
                    <p>The login function is not implement yet</p>
                    <button @click="$router.push({ name: 'dashboard' })"
                        class="border border-white rounded-md px-4 py-1 bg-[#0a0c43] text-white font-bold hover:bg-[#034596] text-center">
                        Dashboard
                    </button>
                </div>
                <!--  -->
                <span class="text-text01 font-bold text-[20px] ">{{ isLogin ? 'Login' : 'Register' }}</span>
                <el-divider />
                <div>
                    <slot />
                </div>
                <div class="text-center text-sm">
                    <p> {{ ask }} <button class="text-link hover:underline"
                            @click=" isLogin ? $router.push('/register') : $router.push('/login')">{{ isLogin
                                ?
                                'Register' : 'Login' }}</button></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const isLogin = ref(false);
route.path === '/register' ? isLogin.value = false : isLogin.value = true;
let ask = route.path.includes('login') ? "Don't have an account?" : "Already have an account?";
</script>