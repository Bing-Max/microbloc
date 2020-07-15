<!-- 
    description: 主页，MicroBloc 的首页
    author: bing
    date: 2020-07-15 12:29
 -->

<template>
    <div id="page-main-panel" class="panel">
        <div id="page-table">
            <Table :tableData="tableData"></Table>
        </div>
    </div>
</template>

<script>
    import Table from '../components/Table.vue'

    import axios from 'axios'
    export default {
        name: 'Page',
        components: {
            Table
        },
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            //localhost:8080/...
            axios.get("/ssm_demo/users").then(res => {
                // console.log(res);

                if(res.data.code == 0){
                    this.$message({
                        message: "获取用户列表",
                        type: 'primary'
                    })

                    this.tableData = res.data.datas.list;
                }
            })
        },
    }
</script>

<style scoped>
    #page-main-panel{
        height: 100%;
        width: 100%;
    }

    #page-table{
        height: 50%;
        width: 50%;
        /* background-color: aquamarine; */
    }
</style>