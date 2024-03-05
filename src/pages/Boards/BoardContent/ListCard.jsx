import { Box } from '@mui/material'
import Card from '../components/Card'

function ListCard() {
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
          backgroundColor: '#a4b0be'
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#7f8fa6'
        }
      }}
    >
      <Card />
      <Card />
      <Card noneMedia/>
      <Card noneMedia/>
      <Card noneMedia/>
      <Card noneMedia/>
      <Card noneMedia/>
      <Card noneMedia/>
      <Card noneMedia/>
      <Card noneMedia/>
    </Box>
  )
}

export default ListCard
