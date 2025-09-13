import * as React from 'react'
import { Layout, Typography } from 'antd'

const { Header: AntHeader } = Layout
const { Title } = Typography

const Header: React.FC = () => {
  return (
    <AntHeader className="bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Title level={3} className="mb-0 text-primary">
          个人简历
        </Title>
        <div className="text-sm text-gray-600">
          在线简历展示
        </div>
      </div>
    </AntHeader>
  )
}

export default Header 