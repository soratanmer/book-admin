<!--
 * @author       : soratanmer
 * @Github       : https://github.com/soratanmer
 * @Date         : 2020-03-28 18:10:54
 * @LastEditors  : soratanmer
 * @LastEditTime : 2020-03-28 18:43:46
 * @FilePath     : \book-admin\src\components\EbookUpload\index.vue
 * @Description  :
 -->

<template>
  <div class="upload-container">
    <el-upload :action="action" :headers="headers">
      请上传
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'

export default {
  data() {
    return {
      action: `${process.env.VUE_APP_BASE_API}/book/upload`
    }
  },
  computed: {
    headers() {
      return {
        Authorization: `Bearer ${getToken()}`
      }
    }
  }
}
</script
>
<style lang="scss" scoped>

</style>
