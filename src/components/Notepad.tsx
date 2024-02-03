import { Paper, TextField, Box, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const Notepad = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [text, setText] = useState("");

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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.value.length >= 700) {
              // Stop input at 10 characters
              setText(event.target.value.substring(0, 700));
              return;
            } else {
              setText(event.target.value);
            }
          }}
        />

        {text.length >= 700 ? (
          <Alert
            severity="error"
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "55vw",
            }}
          >
            Max 700 characters
          </Alert>
        ) : null}

        {text.length >= 700 ? null : (
          <SendIcon
            style={{
              marginTop: 20,
              marginLeft: "auto",
              cursor: "pointer",
            }}
          />
        )}
      </Paper>
    </Box>
  );
};

export default Notepad;
