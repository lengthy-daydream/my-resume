import * as React from 'react'
import { Card, Avatar, Typography, Space, Tag, Divider } from 'antd'
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, TrophyOutlined, AimOutlined, BookOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

interface EducationItem {
  id: string
  school: string
  degree: string
  major: string
  duration: string
  description?: string
}

interface PersonalInfoProps {
  data: {
    name: string
    title: string
    phone: string
    email: string
    location: string
    age: number
    experience: string
    jobIntention: string
    avatar?: string
  }
  education: EducationItem[]
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, education }) => {
  return (
    <Card>
      <div className="flex gap-8 items-start">
        {/* 左侧头像 */}
        <div className="flex-shrink-0">
          <Avatar
            size={120}
            src={data.avatar}
            icon={<UserOutlined />}
            className="shadow-lg"
          />
        </div>
        
        {/* 右侧信息 */}
        <div className="flex-1">
          <Title level={2} className="mb-3">
            {data.name}
          </Title>
          
          {/* <div className="mb-4">
            <Tag 
              color="blue" 
              className="text-lg px-4 py-2" 
              style={{ display: 'inline-flex', alignItems: 'center', lineHeight: '1.2' }}
            >
              {data.title}
            </Tag>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <Text>
              <PhoneOutlined className="mr-2" />
              {data.phone}
            </Text>
            <Text>
              <MailOutlined className="mr-2" />
              {data.email}
            </Text>
            <Text>
              <CalendarOutlined className="mr-2" />
              {data.age}岁
            </Text>
            <Text>
              <TrophyOutlined className="mr-2" />
              {data.experience}
            </Text>
          </div>

          <div className="mb-4">
            <Text strong>
              <EnvironmentOutlined className="mr-2" />
              意向城市：
            </Text>
            <Space size="small" className="ml-2">
              <Tag color="geekblue">上海</Tag>
              <Tag color="geekblue">苏州</Tag>
              <Tag color="geekblue">杭州</Tag>
            </Space>
          </div>

          <div>
            <Text strong>
              <AimOutlined className="mr-2" />
              求职意向：
            </Text>
            <Tag 
              color="green" 
              className="text-base px-3 py-1 ml-2"
              style={{ display: 'inline-flex', alignItems: 'center', lineHeight: '1.2' }}
            >
              {data.jobIntention}
            </Tag>
          </div>
        </div>
      </div>

      <Divider className="my-6" />

      <div>
        <Title level={4} className="mb-4">
          <BookOutlined className="mr-2" />
          教育背景
        </Title>
        {education.map(item => (
          <div key={item.id} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start mb-2">
              <Text strong className="text-base">
                {item.school}
              </Text>
              <Text type="secondary" className="text-sm">
                {item.duration}
              </Text>
            </div>
            <div className="mb-2">
              <Text className="text-gray-600">
                {item.degree} · {item.major}
              </Text>
            </div>
            {item.description && (
              <Text type="secondary" className="text-sm">
                {item.description}
              </Text>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}

export default PersonalInfo 