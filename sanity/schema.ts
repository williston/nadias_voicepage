import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import audioClip from './schemas/audioClip'
import audioBook from './schemas/audioBook'
import audioDemo from './schemas/audioDemo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, audioClip, audioBook, audioDemo],
}
