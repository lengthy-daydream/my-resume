import * as React from 'react'
import { Card, Typography, Timeline } from 'antd'
import { BookOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

interface EducationItem {
  id: string
  school: string
  degree: string
  major: string
  duration: string
  description?: string
}

interface EducationProps {
  data: EducationItem[]
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <Card>
      <Title level={3} className="flex items-center mb-6">
        <BookOutlined className="mr-2 text-primary" />
        教育背景
      </Title>
      
      <Timeline
        items={data.map(item => ({
          children: (
            <div>
              <div className="flex justify-between items-start mb-2">
                <Text strong className="text-lg">
                  {item.school}
                </Text>
                <Text type="secondary">
                  {item.duration}
                </Text>
              </div>
              <div className="mb-2">
                <Text className="mr-4">
                  {item.degree} · {item.major}
                </Text>
              </div>
              {item.description && (
                <Text type="secondary">
                  {item.description}
                </Text>
              )}
            </div>
          )
        }))}
      />
    </Card>
  )
}

export default Education 