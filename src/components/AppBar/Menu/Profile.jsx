import { Logout, PersonAdd, Settings } from '@mui/icons-material'
import { Avatar, Box, Divider, IconButton, ListItemIcon, Tooltip } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <IconButton
        id="basic-button-profile"
        aria-controls={open ? 'basic-menu-profile' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Tooltip title="Account settings">
          <Avatar
            alt="Haodev"
            src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            sx={{ width: 36, height: 36 }}
          >
            Haodev
          </Avatar>
        </Tooltip>
      </IconButton>
      <Menu
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profile'
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
