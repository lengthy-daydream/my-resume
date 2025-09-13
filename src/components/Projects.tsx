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
  role: string
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
      
      <Row gutter={[16, 24]}>
        {data.map(project => (
          <Col xs={24} lg={12} xl={8} key={project.id}>
            <Card 
              size="small"
              title={
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <Text strong className="text-base">
                      {project.name}
                    </Text>
                    <Text type="secondary" className="text-sm">
                      {project.duration}
                    </Text>
                  </div>
                  <Tag color="cyan" className="text-xs">
                    {project.role}
                  </Tag>
                </div>
              }
              className="h-full"
              bodyStyle={{ height: 'calc(100% - 80px)', overflow: 'auto' }}
            >
              <div className="space-y-4">
                <Paragraph className="text-sm">
                  {project.description}
                </Paragraph>
                
                <div>
                  <Text strong className="block mb-2 text-sm">核心成果:</Text>
                  <ul className="pl-4 text-sm">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="mb-1">
                        <Text className="text-xs">{highlight}</Text>
                      </li>
                    ))}
                    {project.highlights.length > 3 && (
                      <li className="text-gray-500 text-xs">
                        ...等{project.highlights.length}项成果
                      </li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <Text strong className="block mb-2 text-sm">技术栈:</Text>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map(tech => (
                      <Tag key={tech} color="blue" className="text-xs mb-1">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default Projects 