import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { Box, Button } from '@mui/material'
import Column from '../components/Column'

function ListColumn() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit', //kế thừa màu của thằng cha nó
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowY: 'hidden',
        overflowX: 'auto',
        gap: 2,
        '&::-webkit-scrollbar': { width: '6px', height: '8px' },
        '&::-webkit-scrollbar-thumb': {
          visibility: 'visible'
        },
        borderRadius: '4px'
      }}
    >
      <Column />

      <Box
        sx={{
          minWidth: 230,
          maxWidth: 250,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: theme => theme.palette.bgr_column
        }}
      >
        <Button
          sx={{
            color: theme => theme.palette.text_color,
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1,
            '&:hover': {
              bgcolor: theme => theme.palette.bgr_column
            }
          }}
          startIcon={<NoteAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumn
