<!-- 
    description: table 组件，主要展示表格数据
    params: 

    author: bing
    date: 2020-07-15 12:34
 -->

<template>
    <div>
        <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="id" label="#" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="department.deptName" label="部门">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        name: 'Table',
        components: {

        },
        props: {
            tableData: Array
        },
        data() {
            return {
                
            }
        }
    }

</script>

<style>

</style>