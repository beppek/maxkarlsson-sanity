import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import { 
  AuthorListWrapper, 
  AuthorListHeading, 
  StyledAuthorList, 
  AuthorListItem, 
  AuthorAvatarWrapper 
} from './blog.styles'

function AuthorList ({ items, title }) {
  return (
    <AuthorListWrapper>
      <AuthorListHeading>{title}</AuthorListHeading>
      <StyledAuthorList>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name
          return (
            <AuthorListItem key={_key}>
              <div>
                <AuthorAvatarWrapper>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                </AuthorAvatarWrapper>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </AuthorListItem>
          )
        })}
      </StyledAuthorList>
    </AuthorListWrapper>
  )
}

export default AuthorList
