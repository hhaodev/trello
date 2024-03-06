import { Box } from '@mui/material'
import ListColumn from './ListColumn'

function BoardContent() {
  return (
    <Box
      px={2}
      py={1}
      sx={{
        width: '100%',
        height: theme => theme.trello.boardContentHeight,
        bgcolor: theme => theme.palette.bgr_board
      }}
    >
      <ListColumn />
    </Box>
  )
}

export default BoardContent
