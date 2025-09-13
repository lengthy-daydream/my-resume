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
  // PNG 下载功能
  const handleDownloadPNG = async () => {
    if (!targetRef.current) {
      message.error('未找到要导出的内容')
      return
    }

    try {
      message.loading('正在生成图片...', 1)
      
      // 使用 html2canvas 将 DOM 转换为 canvas
      const canvas = await html2canvas(targetRef.current, {
        scale: 2, // 提高清晰度
        useCORS: true, // 支持跨域图片
        backgroundColor: '#f5f5f5', // 设置背景色
        width: targetRef.current.scrollWidth,
        height: targetRef.current.scrollHeight
      })

      // 创建下载链接
      const link = document.createElement('a')
      link.download = `${fileName}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()

      message.success('PNG 导出成功！')
    } catch (error) {
      console.error('PNG导出失败:', error)
      message.error('PNG 导出失败，请重试')
    }
  }

  // PDF 下载功能
  const handleDownloadPDF = async () => {
    if (!targetRef.current) {
      message.error('未找到要导出的内容')
      return
    }

    try {
      message.loading('正在生成PDF...', 2)

      // 先生成 canvas
      const canvas = await html2canvas(targetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
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
    }
  }

  // 使用 react-to-print 的打印功能（可选）
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
    documentTitle: fileName,
    onAfterPrint: () => message.success('打印任务已发送！')
  })

  return ( 
    <div className="fixed top-1/2 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-2 flex gap-2 flex-col">
       <Button 
          type="primary" 
          icon={<FileImageOutlined />}
          onClick={handleDownloadPNG}
          size="large"
        >
          下载 PNG
        </Button>
        
        <Button 
          type="primary" 
          icon={<FilePdfOutlined />}
          onClick={handleDownloadPDF}
          size="large"
        >
          下载 PDF
        </Button>
        
        <Button 
          icon={<DownloadOutlined />}
          onClick={handlePrint}
          size="large"
        >
          打印
        </Button>
    </div>
  )
}

export default DownloadActions 