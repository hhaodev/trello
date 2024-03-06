import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import CloseIcon from '@mui/icons-material/Close'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Badge, Box, Button, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'
import { useState } from 'react'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import ModeSelect from '~/components/ModeSelect'
import Profile from './Menu/Profile'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import WorkSpaces from './Menu/WorkSpaces'

function AppBar() {
  const [searchVal, setSearchVal] = useState('')
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: theme => theme.palette.app_bar
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsOutlinedIcon sx={{ color: theme => theme.palette.text_navbar }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon
            component={trelloIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: theme => theme.palette.text_navbar }}
          />
          <Typography
            variant="span"
            sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: theme => theme.palette.text_navbar }}
          >
            Trello
          </Typography>
        </Box>

        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex'
            },
            gap: 1
          }}
        >
          <WorkSpaces />
          <Recent />
          <Starred />
          <Templates />

          <Button sx={{ color: theme => theme.palette.text_navbar }} startIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          sx={{
            minWidth: 120,
            maxWidth: 250,
            '& label': { color: theme => theme.palette.text_navbar },
            '& input': { color: theme => theme.palette.text_navbar },
            '& label.Mui-focused': { color: theme => theme.palette.text_navbar },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme => theme.palette.text_navbar
              },
              '&:hover fieldset': {
                borderColor: theme => theme.palette.text_navbar
              },
              '&.Mui-focused fieldset': {
                borderColor: theme => theme.palette.text_navbar
              }
            }
          }}
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          InputProps={{
            endAdornment: (
              <CloseIcon
                onClick={() => setSearchVal('')}
                fontSize="small"
                sx={{
                  color: theme => (searchVal ? theme.palette.text_navbar : 'transparent'),
                  cursor: 'pointer'
                }}
              />
            )
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <IconButton size="small">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneOutlinedIcon sx={{ color: theme => theme.palette.text_navbar }} />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Help">
          <IconButton size="small">
            <HelpOutlineOutlinedIcon sx={{ cursor: 'pointer', color: theme => theme.palette.text_navbar }} />
          </IconButton>
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
