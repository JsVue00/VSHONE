<template>
    <el-dialog :model-value="isDialogVisible" :title="title" width="500" @close="$emit('close')">
        <div>{{ content }}</div>
        <slot />
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" :loading="isLoading" @click="confirm">
                    {{ $t('confirm') }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    isDialogVisible: boolean,
    title: string,
    content?: string,
    confirm: Function,
    isLoading?: boolean,
}>();

</script>
<style>
.el-dialog {
    padding: 0 !important;
    border-radius: 5px !important;
    overflow: hidden !important;
}

span[role='heading'] {
    color: var(--text1) !important;
}

.el-dialog__header {
    padding: 8px 0 0 20px !important;
    height: 40px !important;
    width: 100%;
    background-color: var(--background1) !important;
}

.el-dialog__body {
    padding: 15px !important;
}

.dialog-footer {
    padding: 0 20px 20px 20px !important;
}
</style>