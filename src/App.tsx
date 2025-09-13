import { Layout } from 'antd'
import Resume from '@/pages/Resume'

const { Content } = Layout

function App() {
  return (
    <Layout className="min-h-screen bg-gray-50">

      <Content className="container mx-auto px-4 py-8">
        <Resume />
      </Content>
    </Layout>
  )
}

export default App 