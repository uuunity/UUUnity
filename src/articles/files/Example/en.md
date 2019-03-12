import MDXImage from 'components/MDXImage'
import moment from 'moment'
import tags from 'articles/tags'

export const meta = {
  id: 'Example',
  title: 'Example article',
  description: 'The example article for uuunity',
  tags: [tags.example, tags.others],
  from: 'https://uuunity-website.herokuapp.com/',
  locale: 'en',
  authors: [{
    name: 'ballfish',
    website: 'http://ballfish.io'
  }],
  createdTime: new Date('2018/3/11'),
  updatedTime: new Date('2018/3/11')
}


# The example article for uuunity

## Do you know that you could use javascript to write unity script?

Hello uuunity.

There is our logo below.

<MDXImage folderName="Example" fileName="Logo.png" alt="logo" />
