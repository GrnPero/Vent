import { Stack, Typography, Modal, Box, Fade } from "@mui/material";
import { IconButton } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import { GppGood } from "@mui/icons-material";
import { Warning } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const Footer = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const footerColor = "#0e0d0d";

  const handleDisclaimerClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <GitHub sx={{ marginRight: "0.5rem", color: footerColor }} />
        <Typography>Source Code</Typography>
      </IconButton>
      <IconButton
        onClick={() =>
          window.open(
            "https://www.privacypolicytemplate.net/live.php?token=nlUKO7r03GsY6JNrbvaftJ5qyW56cOqT"
          )
        }
      >
        <GppGood sx={{ marginRight: "0.5rem", color: footerColor }} />
        <Typography>Privacy Policy</Typography>
      </IconButton>
      <IconButton onClick={handleDisclaimerClick}>
        <Warning sx={{ marginRight: "0.5rem", color: footerColor }} />
        <Typography>Disclaimer</Typography>
      </IconButton>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={isModalOpen}>
          <Box
            sx={{
              width: matches ? "90%" : 400,
              height: "50%",
              overflow: "auto",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Disclaimer
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              VentSpace is designed to provide a supportive and encouraging
              space for personal reflection and expression. While the app aims
              to offer positive feedback and motivation, it is not a substitute
              for professional therapy or counseling.
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              VentSpace is not intended to diagnose, treat, cure, or prevent any
              mental health condition. If you are experiencing significant
              emotional distress, mental health issues, or require therapeutic
              assistance, it is crucial to consult with a licensed mental health
              professional or healthcare provider.
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              The app is not a crisis hotline, and in case of an emergency or
              urgent mental health concern, please contact your local emergency
              services or a crisis helpline.
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              By using VentSpace, you acknowledge that it is not a replacement
              for professional mental health care, and you should seek
              appropriate assistance if needed. The developers and creators of
              VentSpace are not liable for any consequences arising from the use
              of the app.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};

export default Footer;
