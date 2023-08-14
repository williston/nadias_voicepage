import {defineField, defineType} from 'sanity'

export default defineType ({
    name: 'audioClip',
    title: 'AudioClip',
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
      defineField(
      {
        name: 'soundcloud_link',
        title: 'Soundcloud_Link',
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

  /// https://soundcloud.com/nadia-verde/nadiaverde-spanishdemo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing

  /// https://soundcloud.com/nadia-verde/narration-demo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing

  ///https://soundcloud.com/nadia-verde/commercial-demo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing