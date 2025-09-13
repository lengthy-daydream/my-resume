import * as React from 'react'
import { Card, Typography, Divider } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface SkillsProps {
  data: {
    backend: string
    frontend: string
    fullstack: string
    tools: string
  }
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const skillCategories = [
    { title: '前端技能', description: data.frontend, icon: '🎨', color: 'text-blue-600' },
    { title: '后端技能', description: data.backend, icon: '⚙️', color: 'text-green-600' },
    { title: '全栈及运维', description: data.fullstack, icon: '🔧', color: 'text-purple-600' },
    { title: '开发工具与软件', description: data.tools, icon: '🛠️', color: 'text-orange-600' },
  ]

  return (
    <Card className="overflow-hidden">
      <Title level={3} className="flex items-center mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
        <CodeOutlined className="mr-2 sm:mr-3 text-blue-500" />
        专业技能
      </Title>
      
      {/* 移动端垂直布局，桌面端可选网格布局 */}
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="group">
            {/* 技能标题 */}
            <div className="flex items-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{category.icon}</span>
              <Title 
                level={4} 
                className={`m-0 text-base sm:text-lg lg:text-xl font-medium ${category.color} group-hover:scale-105 transition-transform duration-200`}
              >
                {category.title}
              </Title>
            </div>

            {/* 技能内容 */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 hover:bg-gray-100 transition-colors duration-200">
              <Paragraph className="m-0 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                {category.description.split('\n').map((line, lineIndex, array) => (
                  <React.Fragment key={lineIndex}>
                    {line.trim()}
                    {lineIndex < array.length - 1 && <br className="block sm:hidden" />}
                    {lineIndex < array.length - 1 && <span className="hidden sm:inline"> </span>}
                  </React.Fragment>
                ))}
              </Paragraph>
            </div>

            {/* 分隔线 - 最后一项不显示 */}
            {index < skillCategories.length - 1 && (
              <Divider className="my-4 sm:my-6 lg:my-8 opacity-30" />
            )}
          </div>
        ))}
      </div>

      {/* 技能总结卡片 - 桌面端显示 */}
      <div className="hidden lg:block mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full p-3 mr-4">
            <CodeOutlined className="text-white text-xl" />
          </div>
          <div>
            <Title level={5} className="m-0 text-blue-800 mb-1">
              技术栈概览
            </Title>
            <Paragraph className="text-blue-600 text-sm">
              涵盖前后端全栈开发，具备完整的项目开发和部署能力
            </Paragraph>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Skills 