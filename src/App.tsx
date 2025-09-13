import { Layout } from 'antd'
import Resume from '@/pages/Resume'

const { Content } = Layout

function App() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Content className="w-full px-0 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <Resume />
      </Content>
    </Layout>
  )
}

export default App 