import * as React from 'react'
import { Button, Space, message, Spin } from 'antd'
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
  const [isLoading, setIsLoading] = React.useState(false)
  const [loadingText, setLoadingText] = React.useState('')

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

      /* 完全隐藏移动端专用元素 */
      .resume-download-container .block.sm\\:hidden {
        display: none !important;
      }

      /* 强制显示桌面端网格 */
      .resume-download-container .hidden.sm\\:flex {
        display: flex !important;
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

      /* 强制PC端按钮大小和间距 */
      .resume-download-container .ant-btn {
        height: auto !important;
        padding: 8px 16px !important;
        font-size: 14px !important;
      }

      /* 头像和信息区域强制横向布局 */
      .resume-download-container .flex.flex-col.sm\\:flex-row {
        display: flex !important;
        flex-direction: row !important;
        align-items: flex-start !important;
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
      setIsLoading(true)
      setLoadingText('正在准备导出内容...')
      
      // 应用PC端样式
      styleSheet = applyPCStylesForDownload()
      
      // 等待样式应用
      await new Promise(resolve => setTimeout(resolve, 300))
      
      setLoadingText('正在生成高清图片...')
      
      // 使用 html2canvas 将 DOM 转换为 canvas
      const canvas = await html2canvas(targetRef.current, {
        scale: 1.5, // 降低清晰度以减少文件大小
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 1200,
        height: targetRef.current.scrollHeight,
        windowWidth: 1200,
        windowHeight: 800,
        logging: false, // 关闭日志
        imageTimeout: 0
      })

      setLoadingText('正在下载文件...')

      // 创建下载链接
      const link = document.createElement('a')
      link.download = `${fileName}.png`
      link.href = canvas.toDataURL('image/png', 0.8) // 降低质量以减少文件大小
      link.click()

      message.success('PNG 导出成功！')
    } catch (error) {
      console.error('PNG导出失败:', error)
      message.error('PNG 导出失败，请重试')
    } finally {
      // 移除PC样式
      removePCStyles(styleSheet)
      setIsLoading(false)
      setLoadingText('')
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
      setIsLoading(true)
      setLoadingText('正在准备导出内容...')

      // 应用PC端样式
      styleSheet = applyPCStylesForDownload()
      
      // 等待样式应用
      await new Promise(resolve => setTimeout(resolve, 300))

      setLoadingText('正在生成PDF文件...')

      // 先生成 canvas，使用较低的质量设置
      const canvas = await html2canvas(targetRef.current, {
        scale: 1.2, // 降低scale以减少文件大小
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 1200,
        windowWidth: 1200,
        windowHeight: 800,
        logging: false,
        imageTimeout: 0
      })

      setLoadingText('正在压缩并生成PDF...')

      // 使用较低的图片质量
      const imgData = canvas.toDataURL('image/jpeg', 0.6) // 使用JPEG格式和较低质量
      const imgWidth = 210 // A4 纸张宽度 (mm)
      const pageHeight = 295 // A4 纸张高度 (mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0

      // 创建 PDF 文档
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      // 添加第一页
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // 如果内容超过一页，添加更多页面
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      setLoadingText('正在下载PDF文件...')

      // 下载 PDF
      pdf.save(`${fileName}.pdf`)
      message.success('PDF 导出成功！')
    } catch (error) {
      console.error('PDF导出失败:', error)
      message.error('PDF 导出失败，请重试')
    } finally {
      // 移除PC样式
      removePCStyles(styleSheet)
      setIsLoading(false)
      setLoadingText('')
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
    onBeforePrint: () => {
      setIsLoading(true)
      setLoadingText('正在准备打印...')
    },
    onAfterPrint: () => {
      message.success('打印任务已发送！')
      setIsLoading(false)
      setLoadingText('')
      // 打印后移除PC样式
      removePCStyles(document.getElementById('pc-download-styles') as HTMLStyleElement)
    }
  })

  return (
    <>
      {/* 全局Loading遮罩 */}
      <Spin 
        spinning={isLoading} 
        tip={loadingText}
        size="large"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <div />
      </Spin>

      {/* 下载按钮 */}
      <div className="fixed top-1/2 right-2 sm:right-4 z-50 flex gap-1 sm:gap-2 flex-col transform -translate-y-1/2">
        <Button 
          type="primary" 
          icon={<FileImageOutlined />}
          onClick={handleDownloadPNG}
          size="small"
          className="sm:size-large text-xs sm:text-sm px-2 sm:px-4"
          loading={isLoading}
          disabled={isLoading}
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
          loading={isLoading}
          disabled={isLoading}
        >
          <span className="hidden sm:inline">下载 PDF</span>
          <span className="sm:hidden">PDF</span>
        </Button>
        
        <Button 
          icon={<DownloadOutlined />}
          onClick={handlePrint}
          size="small"
          className="sm:size-large text-xs sm:text-sm px-2 sm:px-4"
          loading={isLoading}
          disabled={isLoading}
        >
          <span className="hidden sm:inline">打印</span>
          <span className="sm:hidden">打印</span>
        </Button>
      </div>
    </>
  )
}

export default DownloadActions 