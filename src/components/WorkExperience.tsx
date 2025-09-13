import * as React from 'react'
import { Card, Typography, Timeline, Tag } from 'antd'
import { TeamOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

interface WorkExperienceItem {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies?: string[]
}

interface WorkExperienceProps {
  data: WorkExperienceItem[]
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <Card className="text-center py-8">
        <Title level={3} className="flex items-center justify-center mb-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
          <TeamOutlined className="mr-2 sm:mr-3 text-blue-500" />
          工作经历
        </Title>
        <Text type="secondary" className="text-sm sm:text-base">暂无工作经历</Text>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden">
      <Title level={3} className="flex items-center mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
        <TeamOutlined className="mr-2 sm:mr-3 text-blue-500" />
        工作经历
      </Title>
      
      <Timeline
        className="px-0 sm:px-4"
        items={data.map((item, index) => ({
          dot: (
            <div className="bg-blue-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-md" />
          ),
          children: (
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 ml-2 sm:ml-4 hover:shadow-md transition-shadow duration-200">
              {/* 职位和公司信息 */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-1">
                  <Text strong className="text-base sm:text-lg lg:text-xl text-gray-800 block">
                    {item.position}
                  </Text>
                  <Text className="text-sm sm:text-base text-blue-600 font-medium">
                    {item.company}
                  </Text>
                </div>
                <Tag 
                  color="blue" 
                  className="text-xs sm:text-sm self-start sm:self-auto whitespace-nowrap px-2 py-1"
                >
                  {item.duration}
                </Tag>
              </div>
              
              {/* 工作描述 */}
              <div className="mb-3 sm:mb-4">
                <ul className="space-y-1 sm:space-y-2 pl-4 sm:pl-6">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed relative">
                   
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 技术栈 */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <Text strong className="text-sm sm:text-base text-gray-700 whitespace-nowrap">
                    💻 技术栈：
                  </Text>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {item.technologies.map(tech => (
                      <Tag 
                        key={tech} 
                        className="text-xs sm:text-sm bg-blue-50 border-blue-200 text-blue-700 rounded-full px-2 py-1 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        }))}
      />

      {/* 经验总结 - 桌面端显示 */}
      <div className="hidden lg:block mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-100">
        <div className="flex items-center">
          <div className="bg-green-500 rounded-full p-3 mr-4">
            <TeamOutlined className="text-white text-xl" />
          </div>
          <div>
            <Title level={5} className="m-0 text-green-800 mb-1">
              工作总结
            </Title>
            <Text className="text-green-600 text-sm">
              {data.length} 段工作经历，涵盖多种技术栈和业务场景，具备丰富的实战经验
            </Text>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default WorkExperience 