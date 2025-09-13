import * as React from 'react'
import { Button, Space, message } from 'antd'
import { DownloadOutlined, FileImageOutlined, FilePdfOutlined } from '@ant-design/icons'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useReactToPrint } from 'react-to-print'

interface DownloadActionsProps {
  targetRef: React.RefObject<HTMLDivElement>
  fileName?: string
}

const DownloadActions: React.FC<DownloadActionsProps> = ({ 
  targetRef, 
  fileName = '个人简历-严斌' 
}: DownloadActionsProps) => {

  // 创建专用的PC端下载样式
  const applyPCStylesForDownload = () => {
    if (!targetRef.current) return null

    // 创建PC端样式的CSS规则
    const pcStyles = `
      /* PC端下载专用样式 */
      .resume-download-container {
        max-width: 1200px !important;
        margin: 0 auto !important;
        padding: 24px !important;
        font-size: 14px !important;
        background: #ffffff !important;
      }
      
      .resume-download-container .ant-card {
        margin-bottom: 24px !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
      }

      .resume-download-container .ant-typography-title {
        margin-bottom: 16px !important;
        font-size: 20px !important;
        color: #1890ff !important;
      }

      .resume-download-container .ant-avatar {
        width: 120px !important;
        height: 120px !important;
        margin-right: 24px !important;
      }

      /* 强制两列布局 */
      .resume-download-container .grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 16px !important;
      }

      /* 时间线样式 */
      .resume-download-container .ant-timeline {
        padding-left: 0 !important;
      }

      .resume-download-container .ant-timeline-item-content {
        margin-left: 24px !important;
      }

      /* 标签样式 */
      .resume-download-container .ant-tag {
        margin: 2px 4px 2px 0 !important;
        font-size: 12px !important;
      }

      /* 响应式断点强制禁用 */
      .resume-download-container * {
        max-width: none !important;
      }

      /* 隐藏移动端特有的元素 */
      .resume-download-container .sm\\:hidden,
      .resume-download-container .md\\:hidden,
      .resume-download-container .lg\\:hidden {
        display: block !important;
      }

      /* 强制显示桌面端布局 */
      .resume-download-container .hidden.lg\\:block {
        display: block !important;
      }

      /* 强制桌面端flex布局 */
      .resume-download-container .flex-col.sm\\:flex-row {
        flex-direction: row !important;
      }

      /* 技能卡片网格布局 */
      .resume-download-container .skills-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 20px !important;
      }

      /* 项目卡片优化 */
      .resume-download-container .project-card {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
        margin-bottom: 20px !important;
      }
    `

    // 创建并注入样式
    const styleSheet = document.createElement('style')
    styleSheet.id = 'pc-download-styles'
    styleSheet.textContent = pcStyles
    document.head.appendChild(styleSheet)

    // 给目标元素添加PC下载容器类
    targetRef.current.classList.add('resume-download-container')

    return styleSheet
  }

  // 移除PC端样式
  const removePCStyles = (styleSheet: HTMLStyleElement | null) => {
    if (styleSheet) {
      document.head.removeChild(styleSheet)
    }
    if (targetRef.current) {
      targetRef.current.classList.remove('resume-download-container')
    }
  }

  // PNG 下载功能
  const handleDownloadPNG = async () => {
    if (!targetRef.current) {
      message.error('未找到要导出的内容')
      return
    }

    let styleSheet: HTMLStyleElement | null = null

    try {
      message.loading('正在生成图片...', 1)
      
      // 应用PC端样式
      styleSheet = applyPCStylesForDownload()
      
      // 等待样式应用
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // 使用 html2canvas 将 DOM 转换为 canvas
      const canvas = await html2canvas(targetRef.current, {
        scale: 2, // 提高清晰度
        useCORS: true, // 支持跨域图片
        backgroundColor: '#ffffff', // 设置白色背景
        width: 1200, // 固定PC端宽度
        height: targetRef.current.scrollHeight,
        windowWidth: 1200, // 模拟桌面端视口
        windowHeight: 800
      })

      // 创建下载链接
      const link = document.createElement('a')
      link.download = `${fileName}.png`
      link.href = canvas.toDataURL('image/png', 0.95)
      link.click()

      message.success('PNG 导出成功！')
    } catch (error) {
      console.error('PNG导出失败:', error)
      message.error('PNG 导出失败，请重试')
    } finally {
      // 移除PC样式
      removePCStyles(styleSheet)
    }
  }

  // PDF 下载功能
  const handleDownloadPDF = async () => {
    if (!targetRef.current) {
      message.error('未找到要导出的内容')
      return
    }

    let styleSheet: HTMLStyleElement | null = null

    try {
      message.loading('正在生成PDF...', 2)

      // 应用PC端样式
      styleSheet = applyPCStylesForDownload()
      
      // 等待样式应用
      await new Promise(resolve => setTimeout(resolve, 200))

      // 先生成 canvas
      const canvas = await html2canvas(targetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 1200, // 固定PC端宽度
        windowWidth: 1200,
        windowHeight: 800
      })

      const imgData = canvas.toDataURL('image/png', 0.95)
      const imgWidth = 210 // A4 纸张宽度 (mm)
      const pageHeight = 295 // A4 纸张高度 (mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0

      // 创建 PDF 文档
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      // 添加第一页
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // 如果内容超过一页，添加更多页面
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // 下载 PDF
      pdf.save(`${fileName}.pdf`)
      message.success('PDF 导出成功！')
    } catch (error) {
      console.error('PDF导出失败:', error)
      message.error('PDF 导出失败，请重试')
    } finally {
      // 移除PC样式
      removePCStyles(styleSheet)
    }
  }

  // 使用 react-to-print 的打印功能（保持PC样式）
  const handlePrint = useReactToPrint({
    content: () => {
      // 应用PC样式后返回内容
      applyPCStylesForDownload()
      return targetRef.current
    },
    documentTitle: fileName,
    onAfterPrint: () => {
      message.success('打印任务已发送！')
      // 打印后移除PC样式
      removePCStyles(document.getElementById('pc-download-styles') as HTMLStyleElement)
    }
  })

  return ( 
    <div className="fixed top-1/2 right-2 sm:right-4 z-50 flex gap-1 sm:gap-2 flex-col transform -translate-y-1/2">
       <Button 
          type="primary" 
          icon={<FileImageOutlined />}
          onClick={handleDownloadPNG}
          size="small"
          className="sm:size-large text-xs sm:text-sm px-2 sm:px-4"
        >
          <span className="hidden sm:inline">下载 PNG</span>
          <span className="sm:hidden">PNG</span>
        </Button>
        
        <Button 
          type="primary" 
          icon={<FilePdfOutlined />}
          onClick={handleDownloadPDF}
          size="small"
          className="sm:size-large text-xs sm:text-sm px-2 sm:px-4"
        >
          <span className="hidden sm:inline">下载 PDF</span>
          <span className="sm:hidden">PDF</span>
        </Button>
        
        <Button 
          icon={<DownloadOutlined />}
          onClick={handlePrint}
          size="small"
          className="sm:size-large text-xs sm:text-sm px-2 sm:px-4"
        >
          <span className="hidden sm:inline">打印</span>
          <span className="sm:hidden">打印</span>
        </Button>
    </div>
  )
}

export default DownloadActions 