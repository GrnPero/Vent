import {
  Paper,
  TextField,
  Box,
  Alert,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import apiClient from "../services/api-client";

const Notepad = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [res, setRes] = useState<string>("");

  const handleButtonClick = () => {
    setLoading(true);

    apiClient
      .post("/", { vent: text })
      .then((response) => {
        setLoading(false);
        setRes(response.data.message);
      })
      .catch((error) => {
        setLoading(false);
        setRes("Error fetching data from Firebase");
        console.error("Error fetching data from Firebase:", error);
      });
  };

  return (
    <Box
      marginBottom={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <CircularProgress
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        />
      ) : res.length != 0 ? (
        <Typography
          variant="h5"
          sx={{ wordBreak: "break-word" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            flexDirection: "column",
            width: matches ? "70vw" : "60vw",
          }}
        >
          {res}
        </Typography>
      ) : (
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

          {text.length >= 700 ? null : text.length <= 10 ? (
            <IconButton
              color="default"
              size="large"
              style={{
                marginTop: 20,
                marginLeft: "auto",
                cursor: "pointer",
              }}
              disabled={true}
            >
              <SendIcon fontSize={matches ? "large" : "medium"} />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              size="large"
              style={{
                marginTop: 20,
                marginLeft: "auto",
                cursor: "pointer",
              }}
              onClick={handleButtonClick}
            >
              <SendIcon fontSize={matches ? "large" : "medium"} />
            </IconButton>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default Notepad;
