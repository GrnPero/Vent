import { Paper, TextField, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMediaQuery } from "@mui/material";

const Notepad = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box
      marginBottom={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={3}
        style={{
          padding: 30,
          height: matches ? "70vh" : "60vh",
          width: matches ? "70vw" : "60vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Type here..."
          multiline
          rows={10}
          variant="outlined"
          style={{ height: "100%" }}
          sx={{
            "& fieldset": { border: "none" },
          }}
        />

        <SendIcon
          style={{
            marginTop: 20,
            marginLeft: "auto",
            cursor: "pointer",
          }}
        />
      </Paper>
    </Box>
  );
};

export default Notepad;
