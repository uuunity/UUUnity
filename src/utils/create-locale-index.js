import { allLngs } from 'translation/meta'

const create = (defaultArticle, ...otherPairs) => {
  const others = otherPairs
    .reduce((collection, pair) => Object.assign({}, collection, pair), {})
  return allLngs
    .reduce((collection, lng) => {
      if (others[lng]) return Object.assign({}, collection, { [lng]: others[lng] })
      return Object.assign({}, collection, { [lng]: defaultArticle })
    }, {})
}

export default create
