import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { Box } from '@mui/material'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = e => {
    setMode(e.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        sx={{
          color: theme => theme.palette.text_navbar,
          '&.Mui-focused': {
            color: theme => theme.palette.text_navbar
          }
        }}
        id="label-select-dark-light-mode"
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: theme => theme.palette.text_navbar,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme => theme.palette.text_navbar
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme => theme.palette.text_navbar
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme => theme.palette.text_navbar
          },
          '.MuiSvgIcon-root': {
            color: theme => theme.palette.text_navbar
          }
        }}
      >
        <MenuItem value="light">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
