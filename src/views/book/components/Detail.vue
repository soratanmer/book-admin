<!--
 * @author       : soratanmer
 * @Github       : https://github.com/soratanmer
 * @Date         : 2020-03-28 14:32:13
 * @LastEditors  : soratanmer
 * @LastEditTime : 2020-03-28 18:25:50
 * @FilePath     : \book-admin\src\views\book\components\Detail.vue
 * @Description  :
 -->

<template>
  <el-form ref="postForm" :model="postForm">
    <sticky :class-name="'sub-navbar ' + postForm.status">
      <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
      <el-button v-loading="loading" type="success" style="margin-left: 10px" @click="submitForm">{{ isEdit ? '编辑电子书' : '新增电子书' }}</el-button>
    </sticky>
    <div class="detail-container">
      <el-row>
        <Warning />
        <el-col :span="24">
          <!-- 上传控件的具体样式 -->
          <EbookUpload />
        </el-col>
        <el-col :span="24">2</el-col>
      </el-row>
    </div>
  </el-form>
</template>

<script>
import Sticky from '@/components/Sticky'
import EbookUpload from '@/components/EbookUpload'
import Warning from './Warning'
export default {
  components: {
    Sticky,
    EbookUpload,
    Warning
  },
  props: {
    isEdit: Boolean
  },
  data() {
    return {
      loading: false,
      postForm: {
        status: 'draft'
      }
    }
  },
  methods: {
    showGuide() {
      console.log('show guide')
    },
    submitForm() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}

</script>

<style lang="scss" scoped>
  .detail-container {
    padding: 40px 50px 20px;
  }
</style>
