import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import PersonalInfo from '@/components/PersonalInfo'
import PersonalAdvantages from '@/components/PersonalAdvantages'
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
        <PersonalInfo data={resumeData.personalInfo} education={resumeData.education} />
        <PersonalAdvantages data={{
          advantages: resumeData.advantages,
          portfolioLinks: resumeData.portfolioLinks
        }} />
        <WorkExperience data={resumeData.workExperience} />
        <Projects data={resumeData.projects} />
        <Skills data={resumeData.skills} />
      </div>
    </>
  )
}

export default Resume 