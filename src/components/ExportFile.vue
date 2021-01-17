<template>
  <div>
    <el-button :type="openBtnType" :icon="openBtnIconName"  @click="openDialog"> {{openBtnName}} </el-button>
    <!-- xls下载 -->
    <download-excel
      v-if="downloadExcel"
      v-focus
      type='xls'
      header="主机信息表"
      :data="tableData"
      :fields="json_fields"
      name="info.xls"
      worksheet="报表"
      style="width:20px; height:20px; border-radius:8px; display: none;">
    </download-excel>

    <!-- 下载文件模态框 -->
    <el-dialog
      width="500px"
      style="displsy:flex; justify-content: center;"
      title="导出报表"
      :visible.sync="flag"
      :close-on-click-modal="true"
      :before-close="handleClose">

      <!-- "选择格式"下拉框和"导出按钮" -->
      <div style="width: 100%; display: flex; align-items:center;">
         <span>文件格式</span>
         <!-- "选择格式"下拉框 -->
          <el-select size="medium" v-model="optionsValue" style="width:80px;" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- "导出按钮" -->
        <el-button :type="exportBtnType" size="medium" :icon="exportBtnIconName" style="margin-left:20px;" @click="exportMethod"> {{exportBtnName}} </el-button>
      </div>

      <!-- "预览"表格 -->
      <el-table
        style="margin-top:20px; width: 100%"
        height="350px"
        :data="tableData">
          <el-table-column label="报表预览" align="left">
            <!-- 通过v-for填充列数据 -->
            <el-table-column v-for="(item, key,index) in columnsData" :key="key" :width="columnWidth">
              <template slot="header" slot-scope="scope">
                <input
                  @input="changeColumnName(index)"
                  v-model="tempArr[index]"
                  class="columnStyle"
                  style="width: 90%;"/>
              </template>
              <template slot-scope="scope">
                <span v-text="scope.row[item]"></span>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-pagination
        style="width:100%"
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
    </el-dialog>
  </div>
</template>
<script>
import JsPDF from 'jspdf'
import '../fontsJs/heiti-normal'
import 'jspdf-autotable'

export default {
  name: 'ExportFile',

  // 自定义指令
  directives: {
    focus: {
       inserted (el) {
        el.click()
      }
    }
  },
  data () {
    return {
      downloadExcel: false,
      flag: false,
      // 下拉框列表数据
      options: [
        {
          label: 'xls',
          value: 'xls'
        },
        {
          label: 'xlsx',
          value: 'xlsx'
        },
        {
          label: 'pdf',
          value: 'pdf'
        }
      ],
      optionsValue: 'xls',

      json_fields: {},

      tempArr: [],
      fields: {}
    }
  },

  // 属性
  props: {
    tableData: {
      type: Array
    },
    columnsData: {
      type: Object
    },
    columnWidth: {
      type: String,
      default: '150'
    },
    // 插件按钮名称
    openBtnName: {
      type: String,
      default: '导出报表'
    },

    // 插件按钮样式（支持Element UI button所有类型）
    openBtnType: {
      type: String,
      default: 'primary'
    },

    openBtnIconName: {
      type: String,
      default: "el-icon-copy-document"
    },

    openBtnSize: {
      type: String,
      default: 'medium'
    },

    // "导出"按钮样式（支持Element UI button所有类型）
    exportBtnType: {
      type: String,
      default: 'primary'
    },

    // "导出"按钮名称
    exportBtnName: {
      type: String,
      default: '导出'
    },

    // "导出"按钮图标
    exportBtnIconName: {
      type: String,
      default: 'el-icon-printer'
    }
  },

  mounted () {
    console.log(this.columnsData)
    for (let item in this.columnsData) {
      this.tempArr.push(item)
    }

    console.log(this.tempArr)
  },

  methods: {
    changeColumnName (index) {
      this.fields = {}
      let i = 0
      console.log(this.tempArr)
      for (let key in this.columnsData) {
        this.fields[this.tempArr[i]] = this.columnsData[key]
        i++
      }
      console.log(this.fields)
    },
    
    // 打开 dialog
    openDialog () {
      this.flag = true
    },

    // "导出" 按钮
    exportMethod () {
      if (this.optionsValue == 'xls') {
        this.exportExcel()
        return
      }
      if (this.optionsValue == 'pdf') {
        this.exportPdf()
        return
      }
      
    },

    // 导出xls文件
    exportExcel () {
      this.json_fields = this.fields
      // 自动点击vue-json-excel标签元素
      this.downloadExcel = true
      // 将下载状态改为false，为用户下一次点击做好准备，两秒后用户可再次下载
      setTimeout(() => {
        this.downloadExcel = false
      }, 2000);
    },

    // 导出Pdf文件
    exportPdf () {
      let tempColumns = []
      console.log(this.fields)
      for (let i in this.fields) {
        tempColumns.push({
          header: i,
          dataKey: this.fields[i]
        })
      }
      const doc = new JsPDF('', 'mm', 'a3')
      doc.setFont('heiti')
      // 设置字体大小
      doc.setFontSize(16)
      // 绘制表格
      doc.autoTable({
        didDrawCell: (data) => {
          console.log(data)
          if (data.section === 'body' && data.column.index === 0) {
            var base64Img = 'data:image/jpg;base64,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'
            doc.addImage(base64Img, 'JPEG', data.cell.x + 2, data.cell.y + 2, 10, 10)
          }
        },
        styles: {
          font: 'heiti', fontStyle: 'normal', textColor: [0, 0, 0], halign: 'center'
        },
        body: this.tableData,
        columns: tempColumns,
        // 设置table的主题
        theme: 'grid',
        // Y轴开始位置为200
        // startY: 200
        headStyles: {
          halign: 'center',
        },
        bodyStyles: {
          textColor: [0, 0, 0],
          halign: 'center'
        }
      })

      // 生成PDF，PDF的文件名是test.pdf
      doc.save('主机信息表.pdf')
    },

    handleClose () {
      this.$emit('s','你好')
      this.flag = false
    }
  }
}
</script>
<style scoped>
.columnStyle {
  color: rgb(96, 98, 102);
  height: 27px;
  font-size: 15px;
  border: none;
  outline:none;
  text-indent: 12px;
  box-sizing: border-box;
  border-radius: 8px;
}

.columnStyle:hover {
  border: 1px solid rgb(64, 158, 255);
}
</style>