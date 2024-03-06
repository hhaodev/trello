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
  TextField,
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

  const [isE, setIsE] = useState(false)
  return (
    <Box
      sx={{
        maxWidth: 300,
        minWidth: 300,
        bgcolor: theme => theme.palette.bgr_column,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: theme => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      {/* box header  */}
      <Box
        sx={{
          height: theme => theme.trello.columnHeaderHeight,
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {!isE && (
          <Typography
            variant="h6"
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              pl: 1
            }}
            onClick={() => setIsE(true)}
          >
            Column Title
          </Typography>
        )}
        {isE && <TextField autoFocus onBlur={() => setIsE(false)} id="outlined-search" type="text" size="small" />}
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
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button sx={{ p: '8px 16px' }} startIcon={<AddCardIcon />}>
          Add new card
        </Button>
        <Tooltip title="Drag to move">
          <IconButton>
            <DragHandleIcon sx={{ cursor: 'pointer' }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
