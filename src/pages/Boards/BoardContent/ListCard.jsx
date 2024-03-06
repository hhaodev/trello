import { Box } from '@mui/material'
import Card from '../components/Card'

function ListCard() {
  const cards = [
    {
      name: 'card 1',
      id: 1,
      noneMedia: false
    },

    {
      name: 'card 2',
      id: 2,
      noneMedia: false
    },

    {
      name: 'card 3',
      id: 3,
      noneMedia: true
    },

    {
      name: 'card 4',
      id: 4,
      noneMedia: true
    },

    {
      name: 'card 5',
      id: 5,
      noneMedia: true
    },

    {
      name: 'card 6',
      id: 6,
      noneMedia: true
    },

    {
      name: 'card 7',
      id: 7,
      noneMedia: true
    },

    {
      name: 'card 8',
      id: 8,
      noneMedia: false
    }
  ]
  return (
    <Box
      sx={{
        p: '0 6px',
        m: '0 4px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: theme => `calc(
        ${theme.trello.boardContentHeight} -
        ${theme.spacing(5)} -
        ${theme.trello.columnHeaderHeight} -
        ${theme.trello.columnFooterHeight}
        )`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme => theme.palette.bgr_scroll_card
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme => theme.palette.bgr_scroll_card
        }
      }}
    >
      {cards.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </Box>
  )
}

export default ListCard
