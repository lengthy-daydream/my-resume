import * as React from 'react'
import { Card, Typography, Row, Col, Button } from 'antd'
import { StarOutlined, LinkOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface PersonalAdvantagesProps {
  data: {
    advantages: string[]
    portfolioLinks: {
      bigScreen: string
      appStore: string
    }
  }
}

const PersonalAdvantages: React.FC<PersonalAdvantagesProps> = ({ data }) => {
  const { advantages, portfolioLinks } = data

  // 转换portfolioLinks为统一格式
  const portfolioItems = [
    {
      id: 'bigscreen',
      name: '大屏演示系统',
      url: portfolioLinks.bigScreen,
      description: 'Vue3 + ECharts 开发的数据可视化大屏，展示现代化的数据展示方案',
      icon: '📊'
    },
    {
      id: 'appstore',
      name: '衣带保APP',
      url: portfolioLinks.appStore,
      description: 'UniApp 开发的智能穿戴管理应用，已成功上架App Store',
      icon: '📱'
    }
  ]

  return (
    <Card className="overflow-hidden">
      <Title level={3} className="flex items-center mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
        <StarOutlined className="mr-2 sm:mr-3 text-blue-500" />
        个人优势
      </Title>

      {/* 个人优势列表 */}
      <div className="mb-6 sm:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 lg:p-5 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-blue-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                </div>
                <Paragraph className="m-0 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed flex-1">
                  {advantage}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 作品集链接 */}
      <div>
        <Title level={4} className="flex items-center mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-gray-800">
          <LinkOutlined className="mr-2 text-blue-500" />
          作品展示
        </Title>
        
        {/* 移动端垂直布局 */}
        <div className="block sm:hidden space-y-3">
          {portfolioItems.map((item) => (
            <Button
              key={item.id}
              type="primary"
              icon={<LinkOutlined />}
              block
              size="large"
              className="h-auto py-3 px-4 text-left flex items-start justify-start"
              onClick={() => window.open(item.url, '_blank')}
            >
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center mb-1">
                  <span className="mr-2 text-base">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                <div className="text-xs leading-relaxed opacity-90 whitespace-normal break-words">
                  {item.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
        
        {/* 桌面端网格布局 */}
        <Row gutter={[16, 16]} className="hidden sm:flex">
          {portfolioItems.map((item) => (
            <Col xs={24} sm={12} key={item.id}>
              <Card
                size="small"
                className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer group"
                onClick={() => window.open(item.url, '_blank')}
                bodyStyle={{ padding: '16px' }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <Title level={5} className="m-0 text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </Title>
                  </div>
                  <Paragraph className="m-0 text-sm text-gray-600 leading-relaxed flex-1 mb-3">
                    {item.description}
                  </Paragraph>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400">点击访问</span>
                    <LinkOutlined className="text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* 优势总结 - 桌面端显示 */}
      <div className="hidden lg:block mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-100">
        <div className="flex items-center">
          <div className="bg-yellow-500 rounded-full p-3 mr-4">
            <StarOutlined className="text-white text-xl" />
          </div>
          <div>
            <Title level={5} className="m-0 text-yellow-800 mb-1">
              核心优势
            </Title>
            <Paragraph className="text-yellow-600 text-sm m-0">
              {advantages.length} 项核心优势，{portfolioItems.length} 个作品展示，展现全面的专业能力
            </Paragraph>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PersonalAdvantages 