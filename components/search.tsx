import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <TextField variant="outlined" size="small" fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

