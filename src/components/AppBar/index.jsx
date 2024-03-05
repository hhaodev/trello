import { Badge, Box, Button, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import WorkSpaces from './Menu/WorkSpaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import Profile from './Menu/Profile'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

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
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#171717' : '#1565c0')
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AppsOutlinedIcon sx={{ color: 'white' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon component={trelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
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

          <Button sx={{ color: 'white' }} startIcon={<LibraryAddIcon />}>
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
            maxWidth: 170,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: 'white'
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                onClick={() => setSearchVal('')}
                fontSize="small"
                sx={{
                  color: searchVal ? 'white' : 'transparent',
                  cursor: 'pointer'
                }}
              />
            )
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineOutlinedIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}

export default AppBar
