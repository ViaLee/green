<template>
  <div>
    {{name}}
  </div>
</template>

<script>
    export default {
        name: "user",
        data(){
          return {
            name:''
          }
      },
      created() {
          this.name = this.$route.params.id
      }
    }
</script>

<style scoped>

</style>
