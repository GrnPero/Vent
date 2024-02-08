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
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const footerColor = "#0e0d0d";

  const handleDisclaimerClick = () => {
    setIsModalOpen(true);
  };

  const handlePrivacyPolicyClick = () => {
    setIsPrivacyModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClosePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
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
      <IconButton onClick={handlePrivacyPolicyClick}>
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
      <Modal
        open={isPrivacyModalOpen}
        onClose={handleClosePrivacyModal}
        aria-labelledby="privacy-modal-title"
        aria-describedby="privacy-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={isPrivacyModalOpen}>
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
            <h1>Privacy Policy of ventspace.app</h1>
            <p>
              ventspace.app operates the https://www.ventspace.app website,
              which provides the SERVICE.
            </p>
            <p>
              This page is used to inform website visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service, the
              ventspace.app website.
            </p>
            <p>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation with this policy. The Personal
              Information that we collect are used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which is accessible at
              https://www.ventspace.app, unless otherwise defined in this
              Privacy Policy.
            </p>
            <h2>Information Collection and Use</h2>
            <p>
              We value your privacy and want to be transparent about how we
              collect and use information when you use our service. When you
              visit ventspace.app, we collect certain information to ensure the
              functionality and security of our service.
            </p>
            <h3>Collection of IP Addresses</h3>
            <p>
              When you access our service, we collect your Internet Protocol
              (IP) address. This information helps us prevent misuse of our
              service, such as spamming or abusive behavior. Your IP address is
              logged solely for the purpose of limiting the frequency of usage
              and ensuring the overall quality of the service. It is not stored
              alongside your vents or linked to any other personally
              identifiable information.
            </p>
            <p>
              It's important to note that your vents are not stored on our
              servers; instead, they are securely transmitted to OpenAI's
              services for processing.
            </p>
            <h3>Retention of IP Addresses</h3>
            <p>
              We retain IP addresses collected during your use of our service
              for a maximum period of one month. After this period, IP addresses
              are securely deleted from our systems. This retention period is
              necessary to enforce usage limits and ensure the overall quality
              and security of our service. Your privacy is important to us, and
              we are committed to minimizing the retention of personal
              information.
            </p>
            <h3>Limiting Usage Frequency</h3>
            <p>
              We use IP addresses to enforce usage limits to maintain the
              performance and availability of our service for all users. This
              helps prevent excessive usage that could degrade the experience
              for others. The IP address data is used solely for this purpose
              and is not shared with third parties.
            </p>
            <p>
              We are committed to protecting your privacy, and we do not use IP
              addresses for tracking or profiling purposes. Your anonymity and
              the confidentiality of your vents are of utmost importance to us.
            </p>
            <h2>Log Data</h2>
            <p>
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called
              Log Data. This Log Data may include information such as your
              computer's Internet Protocol ("IP") address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics.
            </p>
            <h2>Service Providers</h2>
            <p>
              We utilize the services of OpenAI to facilitate our VentSpace
              service. OpenAI assists us in generating responses to vents
              submitted by users. By using our service, you acknowledge that
              OpenAI has access to the content of your vents for the purpose of
              providing this functionality. However, OpenAI is contractually
              obligated not to disclose or use this information for any other
              purpose.
            </p>
            <h2>Security</h2>
            <p>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
            <h2>Links to Other Sites</h2>
            <p>
              Our Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over, and assume no responsibility
              for the content, privacy policies, or practices of any third-party
              sites or services.
            </p>
            <p>Children's Privacy</p>
            <p>
              Our Services do not address anyone under the age of 13. We do not
              knowingly collect personal identifiable information from children
              under 13. In the case we discover that a child under 13 has
              provided us with personal information, we immediately delete this
              from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us so that we will be able to do necessary actions.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </p>
            <p>
              Our Privacy Policy was created with the help of the{" "}
              <a href="https://www.privacypolicytemplate.net">
                Privacy Policy Template
              </a>
              .
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to{" "}
              <a href="mailto:app.ventspace@gmail.com">contact us</a>.
            </p>
          </Box>
        </Fade>
      </Modal>
    </Stack>
  );
};

export default Footer;
