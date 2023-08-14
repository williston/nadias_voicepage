import {defineField, defineType} from 'sanity'

export default defineType ({
    name: 'audioBook',
    title: 'AudioBook',
    type: 'document',
    fields: [
        defineField(
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField(
        {
          name: 'author',
          title: 'Author',
          type: 'string',
        }),
      defineField(
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }),
      defineField(
      {
        name: 'file',
        title: 'File',
        type: 'file',
        options: {
          accept: '.mp3,.wav', // whatever audio formats you want to accept
        },
      }),
      defineField(
      {
        name: 'audible_link',
        title: 'Audible_Link',
        type: 'url',
      }),
      defineField(
      {
        name: 'duration',
        title: 'Duration',
        type: 'number',
      }),
      // Add more fields as needed...
    ],
  })

