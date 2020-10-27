<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="this.value.total">
    </el-pagination>
  </div>
</template>

<script>
    export default {
      name: "Pagination.vue",
      props: {
        value: Object
      },
        data() {
          return {

          }
        },
      methods : {
        handleCurrentChange(pageSize) {
          this.value.pageIndex = pageSize;
          this.$emit('current-change');
        }
      }
    }
</script>

<style scoped>

</style>
