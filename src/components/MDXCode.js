import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles/hljs'

const parseClassName = (className) => {
  const defaultObject = { language: 'plain', startLine: 1 }

  if (!className) return defaultObject

  const trimedString = className.replace('language-', '')
  if (trimedString === '') return defaultObject

  const [language, startLineString] = trimedString.split('=')
  const startLine = Number(startLineString)
  if (isNaN(startLine)) return { language, startLine: defaultObject.startLine }

  return { language, startLine }
}

const MDXCode = (props) => {
  const { className, children } = props
  const { language, startLine } = parseClassName(className)
  return (
    <SyntaxHighlighter showLineNumbers language={language} startingLineNumber={startLine} style={monokaiSublime}>
      {children}
    </SyntaxHighlighter>
  )
}

MDXCode.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default MDXCode
