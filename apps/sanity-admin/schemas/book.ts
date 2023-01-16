import {defineType, defineField} from 'sanity'

const bookSchema = defineType({
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
})

export default bookSchema
