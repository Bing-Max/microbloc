<!-- 
    description: 主页，MicroBloc 的首页
    author: bing
    date: 2020-07-15 12:29
 -->

<template>
    <div id="page-main-panel" class="panel">
        <div class="sidebar-container" :class="{'collapse-width': isCollapse}">
            <div class="logo" :class="{'collapse-logo': isCollapse}">
                McBloc
            </div>
            <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
                :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                :collapse-transition="animation">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </div>

        <div class="panel-container">
            <div class="header-container">
                <div class="fold-icon click-icon">
                    <i :class="foldIcon" @click="isCollapse = !isCollapse" style="font-size: 28px; margin-left: 5px;"></i>
                </div>
                <div class="top-manu">
                    <i class="el-icon-chat-line-round click-icon" style="font-size: 28px; margin: 0 10px;"></i>
                    <i class="el-icon-user-solid" style="font-size: 28px; margin: 0 10px;"></i>
                </div>
            </div>

            <div class="main-container">
                <div id="page-table">
                    <Table :tableData="tableData"></Table>
                </div>
            </div>
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
                tableData: [],
                isCollapse: true,
                animation: false,
                
            }
        },
        computed: {
            foldIcon(){
                return this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold';
            }
        },
        mounted() {
            //localhost:8080/...
            axios.get("/ssm_demo/users").then(res => {
                // console.log(res);

                if (res.data.code == 0) {
                    this.$message({
                        message: "获取用户列表",
                        type: 'primary'
                    })

                    this.tableData = res.data.datas.list;
                }
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    #page-main-panel {
        height: 100%;
        width: 100%;
        font-size: 100%;
        background-color: #E0E0E0;

        display: flex;
    }

    #page-table {
        height: 50%;
        width: 50%;
        /* background-color: aquamarine; */
    }

    .sidebar-container {
        width: 200px;
        height: 100%;
        background-color: #545c64;

    }

    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
    }

    .el-menu {
        border: none;
        overflow-y: auto;
    }

    .collapse-width {
        width: 64px !important;
        font-size: 0.5em;
    }

    .panel-container {
        width: 100%;
        height: 100%;
    }

    .logo {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 1.5em;
        text-align: center;
        background-color: #545c64;
        color: #fff;
    }

    .header-container{
        height: 50px;
        background-color: #fff;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .click-icon:hover{
        cursor: pointer;
    }

    .main-container{
        margin: 8px 0 0 8px;
    }

</style>