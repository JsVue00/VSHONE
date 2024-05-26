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
