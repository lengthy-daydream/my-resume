import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PersonalInfo {
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

interface Education {
  id: string
  school: string
  degree: string
  major: string
  duration: string
  description?: string
}

interface WorkExperience {
  id: string
  company: string
  position: string
  duration: string
  description: string[]
  technologies?: string[]
}

interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  highlights: string[]
  duration: string
  role: string
}

interface ResumeState {
  personalInfo: PersonalInfo
  education: Education[]
  workExperience: WorkExperience[]
  projects: Project[]
  skills: {
    backend: string[]
    frontend: string[]
    fullstack: string[]
    tools: string[]
  }
  advantages: string[]
  portfolioLinks: {
    bigScreen: string
    appStore: string
  }
}

const initialState: ResumeState = {
  personalInfo: {
    name: '严斌',
    title: '前端开发工程师',
    phone: '18221421916',
    email: '18221421916@163.com',
    location: '上海',
    age: 28,
    experience: '6年经验',
    jobIntention: '前端开发工程师 或 Node.js 开发工程师'
  },
  education: [
    {
      id: '1',
      school: '上海电机学院',
      degree: '本科',
      major: '电子信息工程',
      duration: '2015/09 - 2019/06'
    }
  ],
  workExperience: [
    {
      id: '1',
      company: '苏州衣带保智能技术有限公司',
      position: '全栈工程师',
      duration: '2024/10 - 至今',
      description: [
        '作为团队核心开发者，独立负责公司核心产品"衣带保"智能穿戴管理平台的全栈开发工作',
        '主导项目技术选型与架构设计，覆盖后端服务(NestJS)、APP端(UniApp)、后台管理系统(Vue3)及数据库设计',
        '负责设备实时通信模块的实现，使用MQTT协议实现设备与服务端的双向通信',
        '建立并维护项目的自动化部署(CI/CD)流程，实现从代码提交到线上部署的全流程自动化',
        '显著提升了团队的迭代效率和交付质量'
      ],
      technologies: ['NestJS', 'TypeScript', 'Vue3', 'UniApp', 'MySQL', 'Redis', 'MQTT', 'GitLab CI/CD']
    },
    {
      id: '2',
      company: '上海笛哒智运物联网有限公司',
      position: '前端工程师',
      duration: '2023/10 - 2024/08',
      description: [
        '通过对 Electron 和 React 技术的深度整合，成功交付了高性能、高兼容性的桌面端产品',
        '封装了多个跨业务的通用组件，提升了代码复用率和团队开发效率',
        '负责桌面端应用的整体架构设计与开发，集成了车辆排队、票据管理、库存可视化等功能',
        '利用WebSocket技术确保任务状态在多端之间的毫秒级实时同步'
      ],
      technologies: ['Electron', 'React', 'TypeScript', 'Ant Design', 'Redux Toolkit', 'WebSocket']
    },
    {
      id: '3',
      company: '上海柚子工道物联技术有限公司',
      position: '前端工程师',
      duration: '2019/09 - 2023/08',
      description: [
        '担任公司核心项目"数链通"的前端开发负责人，与腾讯团队协作，深度参与基于区块链技术的数据安全交换平台研发',
        '负责项目前端架构、通用组件封装及可视化大屏的开发工作',
        '在客户端集成SM2国密非对称加密算法，实现端到端的传输安全',
        '使用ECharts和DataV开发数据流转监控大屏，为运营和决策提供直观的数据支持',
        '通过优化网络性能和用户体验，解决了浏览器缓存问题，实现新版本的无感自动更新'
      ],
      technologies: ['Vue2', 'Vuex', 'Element UI', 'ECharts', 'DataV', 'crypto-js', '区块链']
    }
  ],
  projects: [
    {
      id: '1',
      name: '衣带保智能穿戴APP',
      description: '完整的企业级智能穿戴设备物联网解决方案，提供设备连接、健康监护、实时位置追踪及群组管理等核心功能。作为项目唯一的全栈开发工程师，独立负责从技术选型到上架的完整开发流程。',
      duration: '2024/10 - 至今',
      role: '全栈工程师',
      technologies: ['NestJS', 'TypeScript', 'TypeORM', 'MySQL', 'Redis', 'MQTT', 'WebSocket', 'Vue3', 'Vite', 'Pinia', 'Element Plus', 'ECharts', 'UniApp', 'Wot Design Uni', 'GitLab CI/CD', 'Nginx', 'PM2'],
      highlights: [
        '基于NestJS的模块化设计，独立开发包括设备管理、用户鉴权(RBAC)、实时通信等全部后端服务',
        '使用NestJS集成MQTT服务，实现设备与服务端高效稳定的双向实时通信',
        '使用UniApp框架开发兼容iOS与Android双端的APP，集成蓝牙通信、天地图定位与电子围栏',
        '搭建基于GitLab CI/CD的自动化部署流水线，部署效率提升90%',
        '通过Redis缓存、数据库查询优化，核心接口响应时间低于100ms',
        '独立完成从需求分析到APP打包上架的全过程，展现强大的端到端项目交付能力'
      ]
    },
    {
      id: '2',
      name: '嘀嗒智慧仓储系统',
      description: '为大宗商品（钢铁钢材）仓储场景打造的多终端、多角色协同作业平台。打通司机、仓库管理、票据开具和行车操作等多个环节，通过数字化方式指挥调度整个出库流程。',
      duration: '2023/10 - 2024/08',
      role: '前端开发工程师',
      technologies: ['React', 'Electron', 'Ant Design', 'Redux Toolkit', 'TypeScript', 'WebSocket'],
      highlights: [
        '负责桌面端应用整体架构设计，作为整个系统的指挥中枢',
        '实现从司机App端申请到仓内大屏实时叫号的自动化排队流程',
        '开发工单流转核心模块，实现票据开具后自动生成装货任务并推送至行车终端',
        '为不同角色设计独立的权限隔离操作界面，确保高效协同作业',
        '利用WebSocket确保任务状态在多端间毫秒级实时同步',
        '针对Electron应用进行深度性能优化，保障系统7x24小时稳定运行'
      ]
    },
    {
      id: '3',
      name: '数链通可信数据计算平台',
      description: '与腾讯合作研发的企业级区块链应用，解决企业间大批量数据交换的安全与信任难题。依托腾讯TBaaS底层区块链技术，结合非对称加密算法，构建安全、可追溯、防篡改的数据流转通道。',
      duration: '2019/09 - 2023/08',
      role: '前端开发工程师',
      technologies: ['Vue2', 'Vuex', 'Element UI', 'ECharts', 'DataV', 'crypto-js', '区块链技术'],
      highlights: [
        '攻克前端加密难题，在客户端集成SM2国密非对称加密算法，实现端到端传输安全',
        '利用crypto-js库计算文件哈希值，有效防止数据传输过程中被篡改',
        '搭建工程化体系，基于自定义指令封装按钮级别权限控制',
        '在axios请求层集成CancelToken机制，避免接口拥堵',
        '通过版本号注入策略解决浏览器缓存问题，实现新版本无感自动更新',
        '使用ECharts和DataV开发数据流转监控大屏，实时展示区块链节点状态和数据交换量'
      ]
    }
  ],
  skills: {
    backend: [
      '熟练掌握 Node.js，并精通基于 TypeScript 的企业级框架 NestJS 进行后端开发',
      '熟悉 MySQL 数据库的设计、优化，并熟练使用 TypeORM 等ORM框架进行数据操作',
      '了解 Redis 等非关系型数据库，并有在项目中进行应用的经验',
      '具备 RESTful API 的设计与开发经验，熟悉 JWT 等认证授权机制',
      '熟悉 MQTT 协议，并有使用 NestJS 对接 MQTT Broker 实现物联网设备通信的经验'
    ],
    frontend: [
      '精通 Vue.js 技术栈，熟练掌握 Vue3、Pinia、Vue-Router，并有丰富的项目实践经验',
      '熟练掌握 React 技术栈，熟悉 React Hooks、Redux Toolkit 等状态管理方案，并有相关项目实践经验',
      '熟练掌握 UniApp 跨端开发，具备 H5、小程序、App 的多端开发和上架经验',
      '熟练掌握 HTML5、CSS3、JavaScript (ES6+)，熟悉 TypeScript 在前端项目中的应用',
      '熟悉 ECharts/AntV 等数据可视化库以及 AntDesignVue/Ant Design 等UI组件库'
    ],
    fullstack: [
      '熟练使用 GitLab CI/CD 进行项目自动化构建、测试与部署',
      '熟悉 Nginx 的基本配置及反向代理',
      '具备独立的服务器部署和运维能力'
    ],
    tools: [
      '熟练使用 Axure 进行原型设计，使用 Pixso 进行UI设计',
      '常用开发工具：VSCode、Git、Api fox 等'
    ]
  },
  advantages: [
    '6年开发经验, 具备从前端到后端的全栈开发能力和独立项目交付能力',
    '技术栈覆盖全面，精通 Vue/React 前端、NestJS/Node.js 后端、Electron 桌面端开发、MySQL 数据库及 GitLab CI/CD 自动化部署',
    '独立完成一款APP从产品原型、UI设计、前后台开发、数据库设计到打包上架的全流程，项目已成功上架',
    '具备良好的编码习惯和项目架构能力，熟悉APP开发及组件化封装'
  ],
  portfolioLinks: {
    bigScreen: 'https://vue-big-screen.netlify.app/#/',
    appStore: 'https://apps.apple.com/cn/app/%E8%A1%A3%E5%B8%A6%E4%BF%9D-%E4%B8%BA%E5%8D%83%E4%B8%87%E5%AE%B6%E5%BA%AD%E4%BF%9D%E9%A9%BE%E6%8A%A4%E8%88%AA/id6749834787'
  }
}

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<Partial<PersonalInfo>>) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload }
    },
    addWorkExperience: (state, action: PayloadAction<WorkExperience>) => {
      state.workExperience.push(action.payload)
    },
    updateWorkExperience: (state, action: PayloadAction<WorkExperience>) => {
      const index = state.workExperience.findIndex(exp => exp.id === action.payload.id)
      if (index !== -1) {
        state.workExperience[index] = action.payload
      }
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload)
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projects.findIndex(proj => proj.id === action.payload.id)
      if (index !== -1) {
        state.projects[index] = action.payload
      }
    }
  }
})

export const {
  updatePersonalInfo,
  addWorkExperience,
  updateWorkExperience,
  addProject,
  updateProject
} = resumeSlice.actions

export default resumeSlice.reducer 