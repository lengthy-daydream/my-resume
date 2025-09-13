import * as React from 'react'
import { Card, Typography, Tag } from 'antd'
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
      
      <div className="space-y-6">
        {data.map(project => (
          <Card 
            key={project.id}
            size="small"
            title={
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <Text strong className="text-lg">
                    {project.name}
                  </Text>
                  <Text type="secondary" className="text-sm">
                    {project.duration}
                  </Text>
                </div>
                <Tag 
                  color="cyan" 
                  className="text-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', lineHeight: '1.2' }}
                >
                  {project.role}
                </Tag>
              </div>
            }
            className="shadow-sm"
          >
            <div className="space-y-4">
              <Paragraph>
                {project.description}
              </Paragraph>
              
              <div>
                <Text strong className="block mb-3">核心职责与成果:</Text>
                <ol className="pl-6 space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="mb-2">
                      <Text>{highlight}</Text>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <Text strong className="block mb-3">技术栈:</Text>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Tag 
                      key={tech} 
                      color="blue" 
                      className="mb-1"
                      style={{ display: 'inline-flex', alignItems: 'center', lineHeight: '1.2' }}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}

export default Projects 