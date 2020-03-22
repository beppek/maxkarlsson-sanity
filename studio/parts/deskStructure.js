import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdCollectionsBookmark } from 'react-icons/md'
import { FaBlog } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { IoIosBook } from 'react-icons/io'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'course', 'lesson'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .icon(FaBlog)
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .icon(MdCollectionsBookmark)
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Courses')
        .schemaType('course')
        .icon(GiTeacher)
        .child(S.documentTypeList('course').title('Courses')),
      S.listItem()
        .title('Lessons')
        .schemaType('lesson')
        .icon(IoIosBook)
        .child(S.documentTypeList('lesson').title('Lessons')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
