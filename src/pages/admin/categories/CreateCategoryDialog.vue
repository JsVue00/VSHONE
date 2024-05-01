<template>
  <el-dialog :v-model="dialogFormVisible" title="Shipping address" width="500">
    <!-- <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form> -->
    <template #footer>
      <!-- <div class="dialog-footer">
        <el-button @click="dialogFormVisiblef = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"> Confirm </el-button>
      </div> -->
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  dialogFormVisible: Boolean
});
</script>
