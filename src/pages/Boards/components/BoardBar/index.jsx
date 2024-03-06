import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLES = {
  color: theme => theme.palette.text_color,
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: theme => theme.palette.text_color
  },
  '&:hover': {
    bgcolor: '#ffffff3d'
  }
}

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: theme => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: theme => theme.palette.bgr_board
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip sx={MENU_STYLES} clickable icon={<DashboardIcon />} label="Haodev Board Stack" />
        <Chip sx={MENU_STYLES} clickable icon={<VpnLockIcon />} label="Public/Private Workspaces" />
        <Chip sx={MENU_STYLES} clickable icon={<AddToDriveIcon />} label="Add to Drive" />
        <Chip sx={MENU_STYLES} clickable icon={<FilterListIcon />} label="Filters" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          sx={{
            color: theme => theme.palette.text_color,
            borderColor: theme => theme.palette.text_color,
            '&:hover': { borderColor: theme => theme.palette.text_color }
          }}
          startIcon={<PersonAddIcon />}
          variant="outlined"
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              color: theme => theme.palette.text_color,
              borer: theme => `1px solid ${theme.palette.text_color}`,
              borderWidth: '1px !important',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
          <Tooltip title="Haodev">
            <Avatar
              alt="Haodev"
              src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/423557697_1568221480642244_459177477322082517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=d5sU_gjYbbAAX8o8auM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdJWEmOxmejJFTxyKtsuqWsxKPDhmFIraqP4NhE7fMSQ&oe=65EC0B0B"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
