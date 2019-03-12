import { Fragment } from 'react'
import css from 'styles/basic/components.less'
import { useTranslation } from 'translation/hook'
import { allLngs } from 'translation/meta'
import { i18n } from 'translation/i18n'

const ChooseLng = () => {
  const t = useTranslation()
  const language = i18n.language
  return (
    <Fragment>
      <label htmlFor="lng">{t('lng_choose_label')}</label>
      <select id="lng" value={language} onChange={(event) => i18n.changeLanguage(event.target.value)}>
        {allLngs.map(lng => (<option key={lng} value={lng}>{t(`lng_${lng}`)}</option>))}
      </select>
    </Fragment>
  )
}

export default ChooseLng
