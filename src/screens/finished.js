import * as React from 'react'
import { Link } from 'components/lib'
import { ListItemList } from 'components/list-item-list'

function FinishedScreen() {
  return (
    <ListItemList
      filterListItems={li => Boolean(li.finishDate)}
      noListItems={
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to{' '}
          <Link to="/discover">the Discover page</Link> to add books to your
          list.
          <img src="https://w1.pngwing.com/pngs/35/448/png-transparent-child-reading-book-cartoon-animated-pict-boy-butterfly-moon-short-stories-male-play-standing.png" alt="Child Reading Book Cartoon" />

        </p>
      }
      noFilteredListItems={
        <p>
          Looks like you've got some reading to do! Check them out in your{' '}
          <Link to="/list">reading list</Link> or{' '}
          <Link to="/discover">discover more</Link>.
        </p>
      }
    />
  )
}

export { FinishedScreen }
