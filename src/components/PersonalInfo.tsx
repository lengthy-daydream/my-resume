import * as React from 'react'
import { Card, Typography, Space, Tag, Divider } from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, TrophyOutlined, AimOutlined, BookOutlined } from '@ant-design/icons'

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
    <Card className="overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
        {/* 头像部分 - 移动端居中，桌面端左对齐 */}
        {/* <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
          <Avatar
            size={{ xs: 100, sm: 120, md: 140 }}
            src={data.avatar}
            icon={<UserOutlined />}
            className="shadow-lg border-4 border-white shadow-gray-200"
          />
        </div> */}
        
        {/* 信息部分 */}
        <div className="flex-1 w-full">
          {/* 姓名和标题 */}
          <div className="text-center sm:text-left mb-4 sm:mb-6">
            <Title 
              level={2} 
              className="mb-2 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800"
            >
              {data.name}
            </Title>
            {/* <Title 
              level={4} 
              className="m-0 text-base sm:text-lg lg:text-xl text-blue-600 font-medium"
            >
              {data.title}
            </Title> */}
          </div>

          {/* 基本信息网格 - 响应式布局 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
            <Text className="flex items-center text-sm sm:text-base text-gray-600">
              <PhoneOutlined className="mr-2 text-blue-500" />
              {data.phone}
            </Text>
            <Text className="flex items-center text-sm sm:text-base text-gray-600">
              <MailOutlined className="mr-2 text-blue-500" />
              <span className="truncate">{data.email}</span>
            </Text>
            <Text className="flex items-center text-sm sm:text-base text-gray-600">
              <CalendarOutlined className="mr-2 text-blue-500" />
              {data.age}岁
            </Text>
            <Text className="flex items-center text-sm sm:text-base text-gray-600">
              <TrophyOutlined className="mr-2 text-blue-500" />
              {data.experience}
            </Text>
          </div>

          {/* 意向城市 */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <Text strong className="flex items-center text-sm sm:text-base text-gray-700 whitespace-nowrap">
                <EnvironmentOutlined className="mr-2 text-blue-500" />
                意向城市：
              </Text>
              <Space size="small" wrap>
                <Tag color="geekblue" className="text-xs sm:text-sm">上海</Tag>
                <Tag color="geekblue" className="text-xs sm:text-sm">苏州</Tag>
                <Tag color="geekblue" className="text-xs sm:text-sm">杭州</Tag>
              </Space>
            </div>
          </div>

          {/* 求职意向 */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <Text strong className="flex items-center text-sm sm:text-base text-gray-700 whitespace-nowrap">
                <AimOutlined className="mr-2 text-blue-500" />
                求职意向：
              </Text>
              <Tag 
                color="green" 
                className="text-sm sm:text-base px-3 py-1 inline-flex items-center font-medium"
              >
                {data.jobIntention}
              </Tag>
            </div>
          </div>
        </div>
      </div>

      {/* 教育经历 */}
      {education && education.length > 0 && (
        <>
          <Divider className="my-6 sm:my-8" />
          <div>
            <Title level={4} className="flex items-center mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-gray-800">
              <BookOutlined className="mr-2 text-blue-500" />
              教育经历
            </Title>
            <div className="space-y-3 sm:space-y-4">
              {education.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <div className="flex-1">
                      <Text strong className="text-base sm:text-lg text-gray-800 block sm:inline">
                        {item.school}
                      </Text>
                      <Text className="text-sm sm:text-base text-gray-600 block sm:inline sm:ml-3">
                        {item.degree} · {item.major}
                      </Text>
                    </div>
                    <Tag 
                      color="blue" 
                      className="text-xs sm:text-sm self-start sm:self-auto whitespace-nowrap"
                    >
                      {item.duration}
                    </Tag>
                  </div>
                  {item.description && (
                    <Text className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </Text>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  )
}

export default PersonalInfo 