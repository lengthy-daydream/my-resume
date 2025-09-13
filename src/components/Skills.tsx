import * as React from 'react'
import { Card, Typography, Row, Col, Divider } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface SkillsProps {
  data: {
    backend: string
    frontend: string
    fullstack: string
    tools: string
  }
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const skillCategories = [
    { title: '前端技能', description: data.frontend },
    { title: '后端技能', description: data.backend },
    { title: '全栈及运维', description: data.fullstack },
    { title: '开发工具与软件', description: data.tools },
  ]

  return (
    <Card>
      <Title level={3} className="flex items-center mb-6">
        <CodeOutlined className="mr-2 text-primary" />
        专业技能
      </Title>
      
      {skillCategories.map((category, index) => (
        <div key={category.title}>
          <Title level={4} className="mb-3 text-gray-800">
            {category.title}：
          </Title>
                     <Paragraph className="mb-6 text-gray-600 leading-relaxed text-justify">
             {category.description.split('\n').map((line, index, array) => (
               <React.Fragment key={index}>
                 {line}
                 {index < array.length - 1 && <br />}
               </React.Fragment>
             ))}
           </Paragraph>
          {index < skillCategories.length - 1 && (
            <Divider className="my-6" />
          )}
        </div>
      ))}
    </Card>
  )
}

export default Skills 