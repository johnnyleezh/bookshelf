import * as React from 'react'
import { Link } from 'components/lib'
import { ListItemList } from 'components/list-item-list'

function ReadingListScreen() {
  return (
    <ListItemList
      filterListItems={li => !li.finishDate}
      noListItems={
        <p>
          Hey there! Welcome to your bookshelf reading list. Get started by
          heading over to <Link to="/discover">the Discover page</Link> to add
          books to your list.
          <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/fc6bbf25-30de-4c4c-1688-239e82ffaf00/public" alt="Child Reading Book Cartoon" />
        </p>


      }
      noFilteredListItems={
        <p>
          Looks like you've finished all your books! Check them out in your{' '}
          <Link to="/finished">finished books</Link> or{' '}
          <Link to="/discover">discover more</Link>.
        </p>
      }
    />
  )
}

export { ReadingListScreen }
