import { Box } from '@mui/material'
import ListColumn from './ListColumn'

function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => theme.trello.boardContentHeight,
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#212121' : '#1976d2'),
        p: '10px 16px'
      }}
    >
      <ListColumn />
    </Box>
  )
}

export default BoardContent
