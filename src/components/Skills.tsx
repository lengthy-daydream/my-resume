import * as React from 'react'
import { Card, Typography, Tag, Row, Col } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

const { Title } = Typography

interface SkillsProps {
  data: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const skillCategories = [
    { title: '前端技术', skills: data.frontend, color: 'blue' },
    { title: '后端技术', skills: data.backend, color: 'green' },
    { title: '数据库', skills: data.database, color: 'orange' },
    { title: '开发工具', skills: data.tools, color: 'purple' },
  ]

  return (
    <Card>
      <Title level={3} className="flex items-center mb-6">
        <CodeOutlined className="mr-2 text-primary" />
        专业技能
      </Title>
      
      <Row gutter={[16, 16]}>
        {skillCategories.map((category) => (
          <Col xs={24} sm={12} md={6} key={category.title}>
            <div>
              <Title level={5} className="mb-3">
                {category.title}
              </Title>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <Tag
                    key={skill}
                    color={category.color}
                    className="mb-2"
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default Skills 