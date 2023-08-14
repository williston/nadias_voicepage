import {defineField, defineType} from 'sanity'

export default defineType ({
    name: 'audioDemo',
    title: 'AudioDemo',
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
        name: 'description',
        title: 'Description',
        type: 'text',
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
     /*  defineField(
      {
        name: 'duration',
        title: 'Duration',
        type: 'number',
      }), */
      // Add more fields as needed...
    ],
  })