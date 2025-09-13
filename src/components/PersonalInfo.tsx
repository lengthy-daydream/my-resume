import * as React from 'react'
import { Card, Avatar, Typography, Space, Tag, Divider } from 'antd'
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, TrophyOutlined, AimOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

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
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
  return (
    <Card className="text-center">
      <div className="flex flex-col items-center space-y-4">
        <Avatar
          size={120}
          src={data.avatar}
          icon={<UserOutlined />}
          className="shadow-lg"
        />
        
        <div>
          <Title level={2} className="mb-2">
            {data.name}
          </Title>
          <Tag color="blue" className="text-lg px-4 py-2">
            {data.title}
          </Tag>
        </div>

        <Space size="large" wrap className="justify-center">
          <Text>
            <PhoneOutlined className="mr-2" />
            {data.phone}
          </Text>
          <Text>
            <MailOutlined className="mr-2" />
            {data.email}
          </Text>
          <Text>
            <EnvironmentOutlined className="mr-2" />
            {data.location}
          </Text>
        </Space>

        <Divider className="my-4" />

        <Space size="large" wrap className="justify-center">
          <Text>
            <CalendarOutlined className="mr-2" />
            {data.age}岁
          </Text>
          <Text>
            <TrophyOutlined className="mr-2" />
            {data.experience}
          </Text>
        </Space>

        <div className="max-w-md">
          <Text strong className="block mb-2">
            <AimOutlined className="mr-2" />
            求职意向：
          </Text>
          <Tag color="green" className="text-base px-3 py-1">
            {data.jobIntention}
          </Tag>
        </div>
      </div>
    </Card>
  )
}

export default PersonalInfo 