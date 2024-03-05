import { Box, Button } from '@mui/material'
import Column from '../components/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

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
        '&::-webkit-scrollbar': { width: '6px', height: '7px' },
        '&::-webkit-scrollbar-thumb': {
          visibility: 'visible'
        }
      }}
    >
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />

      <Box
        sx={{
          minWidth: 200,
          maxWidth: 250,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}
      >
        <Button
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
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
