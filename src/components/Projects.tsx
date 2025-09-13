import * as React from 'react'
import { Card, Typography, Row, Col, Tag } from 'antd'
import { ProjectOutlined } from '@ant-design/icons'

const { Title, Text, Paragraph } = Typography

interface ProjectItem {
  id: string
  name: string
  description: string
  technologies: string[]
  highlights: string[]
  duration: string
}

interface ProjectsProps {
  data: ProjectItem[]
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <Card>
        <Title level={3} className="flex items-center mb-6">
          <ProjectOutlined className="mr-2 text-primary" />
          项目经历
        </Title>
        <Text type="secondary">暂无项目经历</Text>
      </Card>
    )
  }

  return (
    <Card>
      <Title level={3} className="flex items-center mb-6">
        <ProjectOutlined className="mr-2 text-primary" />
        项目经历
      </Title>
      
      <Row gutter={[16, 16]}>
        {data.map(project => (
          <Col xs={24} md={12} key={project.id}>
            <Card 
              size="small"
              title={
                <div className="flex justify-between items-start">
                  <Text strong>{project.name}</Text>
                  <Text type="secondary" className="text-sm">
                    {project.duration}
                  </Text>
                </div>
              }
              className="h-full"
            >
              <Paragraph className="mb-4">
                {project.description}
              </Paragraph>
              
              <div className="mb-4">
                <Text strong className="block mb-2">项目亮点:</Text>
                <ul className="pl-4">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="mb-1">
                      <Text>{highlight}</Text>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Text strong className="block mb-2">技术栈:</Text>
                {project.technologies.map(tech => (
                  <Tag key={tech} color="blue" className="mb-1">
                    {tech}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default Projects 