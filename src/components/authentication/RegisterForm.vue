<template>

    <el-form ref="loginFormRule" style="max-width: 600px" :model="loginRequestForm" :rules="rules" label-position='top'
        label-width="auto" class="demo-ruleForm" status-icon>
        <div class=" max-h-[350px] overflow-auto">
            <el-form-item label="Email" prop="email">
                <el-input v-model="loginRequestForm.email" type="email" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginRequestForm.password" placeholder="Enter password" type="password" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginRequestForm.password" placeholder="Enter password" type="password" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginRequestForm.password" placeholder="Enter password" type="password" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginRequestForm.password" placeholder="Enter password" type="password" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginRequestForm.password" placeholder="Enter password" type="password" />
            </el-form-item>
        </div>
        <el-button style="width: 100%;" type="primary" @click="onUserSubmit(loginFormRule)"> Submit
        </el-button>
    </el-form>
</template>
<script lang="ts" setup>
import useLogin from '@/composables/useLogin';
const {
    rules,
    onUserSubmit,
    loginFormRule,
    loginRequestForm,
    formSize,
    resetForm,
} = useLogin();
</script>