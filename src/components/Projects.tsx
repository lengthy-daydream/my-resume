import * as React from 'react'
import { Card, Typography, Tag } from 'antd'
import { ProjectOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

interface ProjectItem {
  id: string
  name: string
  description: string
  technologies: string[]
  highlights: string[]
  duration: string
  role: string
}

interface ProjectsProps {
  data: ProjectItem[]
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <Card className="text-center py-8">
        <Title level={3} className="flex items-center justify-center mb-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
          <ProjectOutlined className="mr-2 sm:mr-3 text-blue-500" />
          项目经历
        </Title>
        <Text type="secondary" className="text-sm sm:text-base">暂无项目经历</Text>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <Title level={3} className="flex items-center mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
        <ProjectOutlined className="mr-2 sm:mr-3 text-blue-500" />
        项目经历
      </Title>
      
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        {data.map((project) => (
          <Card 
            key={project.id}
            className="shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-blue-200"
            bodyStyle={{ padding: '16px' }}
          >
            {/* 项目头部信息 */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                <div className="flex-1">
                  <Text strong className="text-base sm:text-lg lg:text-xl text-gray-800 block">
                    🚀 {project.name}
                  </Text>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-2">
                    <Tag 
                      color="cyan" 
                      className="text-xs sm:text-sm self-start sm:self-auto px-2 py-1 rounded-full"
                    >
                      {project.role}
                    </Tag>
                    <Text type="secondary" className="text-xs sm:text-sm">
                      ⏱️ {project.duration}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              {/* 项目描述 */}
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-400">
                <Text strong className="text-sm sm:text-base text-blue-800 block mb-2">
                  📋 项目描述
                </Text>
                <Paragraph className="m-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {project.description}
                </Paragraph>
              </div>
              
              {/* 核心职责与成果 */}
              <div className="bg-green-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-400">
                <Text strong className="text-sm sm:text-base text-green-800 block mb-3">
                  🎯 核心职责与成果
                </Text>
                <ol className="space-y-1 sm:space-y-2 pl-4 sm:pl-6 m-0">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed relative">
                     
                      {highlight}
                    </li>
                  ))}
                </ol>
              </div>
              
              {/* 技术栈 */}
              <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
                <Text strong className="text-sm sm:text-base text-purple-800 block mb-3">
                  💻 技术栈
                </Text>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Tag 
                      key={techIndex} 
                      className="text-xs sm:text-sm bg-white border-purple-200 text-purple-700 rounded-full px-2 py-1 hover:bg-purple-100 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 项目总结 - 桌面端显示 */}
      <div className="hidden lg:block mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
        <div className="flex items-center">
          <div className="bg-purple-500 rounded-full p-3 mr-4">
            <ProjectOutlined className="text-white text-xl" />
          </div>
          <div>
            <Title level={5} className="m-0 text-purple-800 mb-1">
              项目总结
            </Title>
            <Text className="text-purple-600 text-sm">
              共完成 {data.length} 个项目，涵盖多个领域和技术栈，具备完整的项目开发经验
            </Text>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Projects 