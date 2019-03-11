import MDXImage from 'components/MDXImage'
import moment from 'moment'
import tags from '../tags'

export const meta = {
  id: 'example',
  name: 'Example article',
  tags: [tags.example, tags.others],
  author: 'ballfish',
  createdTime: new Date('2018/3/11'),
  updatedTime: new Date('2018/3/11')
}

# The example article for uuunity

## Do you know that you could use javascript to write unity script?

Hello uuunity.

There is our logo below.

<MDXImage folderName="example" fileName="logo.png" alt="logo" />
