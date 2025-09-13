import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import PersonalInfo from '@/components/PersonalInfo'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import DownloadActions from '@/components/DownloadActions'

const Resume: React.FC = () => {
  const resumeData = useSelector((state: RootState) => state.resume)
  const resumeRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <DownloadActions targetRef={resumeRef} />
      <div ref={resumeRef} className="max-w-4xl mx-auto space-y-8">
        <PersonalInfo data={resumeData.personalInfo} />
        <Education data={resumeData.education} />
        <Skills data={resumeData.skills} />
        <WorkExperience data={resumeData.workExperience} />
        <Projects data={resumeData.projects} />
      </div>
    </>
  )
}

export default Resume 