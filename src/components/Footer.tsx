import { Stack, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import { GppGood } from "@mui/icons-material";
import { Warning } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Stack
      direction={matches ? "column" : "row"}
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <IconButton
        onClick={() => window.open("https://github.com/GrnPero/Vent")}
      >
        <GitHub sx={{ marginRight: "0.5rem" }} />
        <Typography>Source Code</Typography>
      </IconButton>
      <IconButton>
        <GppGood sx={{ marginRight: "0.5rem" }} />
        <Typography>Privacy Policy</Typography>
      </IconButton>
      <IconButton>
        <Warning sx={{ marginRight: "0.5rem" }} />
        <Typography>Disclaimer</Typography>
      </IconButton>
    </Stack>
  );
};

export default Footer;
