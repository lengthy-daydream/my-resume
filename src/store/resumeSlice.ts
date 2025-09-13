import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PersonalInfo {
  name: string
  title: string
  phone: string
  email: string
  location: string
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
}

interface ResumeState {
  personalInfo: PersonalInfo
  education: Education[]
  workExperience: WorkExperience[]
  projects: Project[]
  skills: {
    frontend: string[]
    backend: string[]
    database: string[]
    tools: string[]
  }
}

const initialState: ResumeState = {
  personalInfo: {
    name: '严斌',
    title: '前端工程师',
    phone: '18221421916',
    email: '18221421916@163.com',
    location: '上海'
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
  workExperience: [],
  projects: [],
  skills: {
    frontend: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'Python'],
    database: ['MySQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'Webpack', 'Vite', 'Docker']
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