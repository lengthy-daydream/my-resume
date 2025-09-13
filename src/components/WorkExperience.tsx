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
      <Card>
        <Title level={3} className="flex items-center mb-6">
          <TeamOutlined className="mr-2 text-primary" />
          工作经历
        </Title>
        <Text type="secondary">暂无工作经历</Text>
      </Card>
    )
  }

  return (
    <Card>
      <Title level={3} className="flex items-center mb-6">
        <TeamOutlined className="mr-2 text-primary" />
        工作经历
      </Title>
      
      <Timeline
        items={data.map(item => ({
          children: (
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Text strong className="text-lg">
                    {item.position}
                  </Text>
                  <br />
                  <Text type="secondary">
                    {item.company}
                  </Text>
                </div>
                <Text type="secondary">
                  {item.duration}
                </Text>
              </div>
              
              <ul className="mb-4 pl-6">
                {item.description.map((desc, index) => (
                  <li key={index} className="mb-2">
                    <Text>{desc}</Text>
                  </li>
                ))}
              </ul>
              
              {item.technologies && (
                <div>
                  <Text strong className="mr-2">技术栈:</Text>
                  {item.technologies.map(tech => (
                    <Tag key={tech} className="mb-1">
                      {tech}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          )
        }))}
      />
    </Card>
  )
}

export default WorkExperience 