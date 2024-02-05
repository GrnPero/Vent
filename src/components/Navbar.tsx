import { IconButton, Stack } from "@mui/material";
import { Segment } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      style={{
        paddingRight: matches ? "0" : "3rem",
      }}
    >
      <IconButton color="primary" size="large">
        <Segment fontSize={matches ? "large" : "medium"} />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
