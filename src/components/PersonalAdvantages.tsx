import * as React from 'react'
import { Card, Typography, List, Button, Space } from 'antd'
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
  return (
    <Card>
      <Title level={3} className="flex items-center mb-6">
        <StarOutlined className="mr-2 text-primary" />
        个人优势
      </Title>
      
      <List
        dataSource={data.advantages}
        renderItem={(advantage, index) => (
          <List.Item key={index}>
            <Paragraph className="mb-0">
              <StarOutlined className="mr-2 text-yellow-500" />
              {advantage}
            </Paragraph>
          </List.Item>
        )}
      />
      
      <div>
        <Title level={5} className="mb-4">
          <LinkOutlined className="mr-2" />
          作品展示
        </Title>
        <Space wrap>
          <Button 
            type="primary" 
            icon={<LinkOutlined />}
            href={data.portfolioLinks.bigScreen}
            target="_blank"
            rel="noopener noreferrer"
          >
            大屏演示系统
          </Button>
          <Button 
            type="primary" 
            icon={<LinkOutlined />}
            href={data.portfolioLinks.appStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            衣带保APP（已上架）
          </Button>
        </Space>
      </div>
    </Card>
  )
}

export default PersonalAdvantages 