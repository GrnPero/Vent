import React from "react";
import { IconButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { Segment, Replay } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResetClick = () => {
    setAnchorEl(null);
    window.location.reload();
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      style={{
        paddingRight: matches ? "0" : "3rem",
      }}
    >
      <IconButton
        color="primary"
        size="large"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Segment fontSize={matches ? "large" : "medium"} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleResetClick}>
          <ListItemIcon>
            <Replay fontSize="small" />
          </ListItemIcon>
          <ListItemText>Reset</ListItemText>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default Navbar;
