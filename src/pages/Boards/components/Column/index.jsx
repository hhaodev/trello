import { useState } from 'react'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material'

import ListCard from '../../BoardContent/ListCard'

function Column() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        maxWidth: 300,
        minWidth: 300,
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ebecf0'),
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: theme => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      {/* box header  */}
      <Box
        sx={{
          height: theme => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Column Title
        </Typography>
        <Box>
          <Tooltip title="More option">
            <IconButton
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {!open ? (
                <ExpandMoreOutlinedIcon sx={{ color: 'text.primary', cursor: 'pointer' }} />
              ) : (
                <ExpandLessOutlinedIcon sx={{ color: 'text.primary', cursor: 'pointer' }} />
              )}
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Coppy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Delete this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* box card list  */}
      <ListCard />

      {/* box footer */}
      <Box
        sx={{
          height: theme => theme.trello.columnFooterHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
