<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '../../../utils/format'
import { deleteArticle, getAllArticles } from '@/api/article.js'
const router = useRouter()
const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const currentTableData = ref([])
const currentSelection = ref([])

/**
 * 处理当前页面切换
 */
const handleCurrentChange = (number) => {
  const startIndex = pageSize.value * (number - 1)
  const endIndex = pageSize.value * number
  currentTableData.value = tableData.value.slice(startIndex, endIndex)
}
/**
 * 数据切片，默认10条每页
 */
const sliceTableData = (number = pageSize.value) => {
  currentTableData.value = tableData.value.reduce((slicedArr, item, index) => {
    if (index < number) {
      slicedArr.push(item)
    }
    return slicedArr
  }, [])
}
/**
 * 获取所有Articles数据
 */
const getAllArticlesData = async () => {
  const res = await getAllArticles()
  tableData.value = res
  sliceTableData()
}

/**
 * 处理每页容量切换
 */
const handleSizeChange = (number) => {
  sliceTableData(number)
}
/**
 * 删除文章统一处理
 */
const handleDeleteArticle = (willDeleteArticles) => {
  // if (Array.isArray(willDeleteArticles)) {
  //   const deleteArticleId = willDeleteArticles.map((item) => item.articleId)
  //   tableData.value = tableData.value.filter((item) => {
  //     return !deleteArticleId.includes(item.articleId)
  //   })
  // } else {}
  tableData.value.forEach(async (item) => {
    if (willDeleteArticles.articleId === item.articleId) {
      await deleteArticle(item.articleId)
    }
  })
  tableData.value = tableData.value.filter((item) => {
    return willDeleteArticles.articleId !== item.articleId
  })

  sliceTableData()
  handleCurrentChange(currentPage.value)
}
/**
 * 拉起确认删除提示框
 */
const showConfirmMessage = (willDeleteArticles) => {
  ElMessageBox.confirm('确认要删除吗', '', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      handleDeleteArticle(willDeleteArticles)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })
}
/**
 * 处理多选
 */
const handleSelectionChange = (selection) => {
  currentSelection.value = selection
}
/**
 * 多选删除文章
 */
const handleDeleteAll = () => {
  showConfirmMessage(currentSelection.value)
}
/**
 * 删除单个文章
 */
const handleDeleteSingle = (row) => {
  showConfirmMessage(row)
}
/**
 * 处理修改文章
 */
const handleModifyArticle = (row) => {
  router.push({
    name: 'edit',
    params: {
      id: row.articleId,
    },
  })
}
const handleFormatDate = (row, column, cellValue, index) => {
  return formatDate(cellValue)
}
/**
 * 获取数据
 */
onMounted(() => {
  getAllArticlesData()
})
</script>

<template>
  <div class="p-3 w-full h-full overflow-auto">
    <el-card class="box-card">
      <el-table
        :default-sort="{ prop: 'date', order: 'descending' }"
        :data="currentTableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <!-- <el-table-column
          type="selection"
          width="55" /> -->
        <el-table-column
          prop="title"
          label="标题" />
        <el-table-column
          prop="tags"
          sortable
          label="分类" />
        <el-table-column
          prop="date"
          sortable
          label="发布时间"
          :formatter="handleFormatDate" />
        <!-- <el-table-column
          prop="views"
          sortable
          label="浏览量" /> -->
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleModifyArticle(scope.row)"
              >修改</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="handleDeleteSingle(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-button
        v-show="currentSelection.length"
        class="mt-3"
        type="danger"
        @click="handleDeleteAll"
        >删除</el-button
      >
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        class="mt-3"
        :page-sizes="[10, 15, 20, 25, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.el-card {
  height: 100%;
  overflow: auto;
}
</style>
