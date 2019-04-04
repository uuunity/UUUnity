import React from 'react'
import Frame from 'components/Frame'
import { useTranslation } from 'translation/hook'

const About = () => {
  const t = useTranslation()
  return (
    <Frame title={t('title_about_us')}>
    </Frame>
  )
}

export default About
