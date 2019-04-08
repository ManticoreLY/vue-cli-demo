<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" submit>保存</el-button>
        <el-button type="warning" reset>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>
