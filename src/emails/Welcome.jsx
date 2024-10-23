import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

// import "../../public/logo.png";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const Welcome = ({ firstname }) => (
  <Html>
    <Head />
    <Preview>
      Thank you for subscribing to Mcyberacademy! We&pos;re so excited to welcome you.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="logo.png"
          width="170"
          height="50"
          alt="Mcyberacademy"
          style={logo}
        />
        <Text style={paragraph}>Thank you!</Text>
        <Text style={paragraph}>Hi, {firstname}</Text>
        <Text style={paragraph}>
          Thank you for subscribing to Mcyberacademy! We&pos;re so excited to welcome you.
          As a Mcyberacademy Premium user, you can now explore our entire library of
          3000+ titles, read or listen offline, and sync your library across your devices.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://your-url.com/discover">
            Discover new titles
          </Button>
        </Section>
        <Text style={paragraph}>
          As a Mcyberacademy subscriber, you&apos;ll also get the Mcyberacademy Minute in your
          inbox each workday, bright and early. Start your day with the Minute to learn
          one fascinating fact or skill every morning.
        </Text>
        <Text style={paragraph}>
          Not sure what you signed up for? It happens! You can view your subscription settings <a href="https://your-url.com/settings" style={link}>here</a>.
        </Text>
        <Text style={paragraph}>
          Happy learning,<br />
          Your Mcyberacademy Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Copyright © 2023 Mcyberacademy, Your Address, City, Country | <a href="mailto:email@company.com" style={link}>email@company.com</a><br />
          You&pos;ve received this email because you have an account with Mcyberacademy. <a href="https://your-url.com/settings" style={link}>View your Mcyberacademy profile settings</a>.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Welcome;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 20px 48px",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
};

const logo = {
  display: "block",
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#333333",
  textAlign: "center",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#4CAF50",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px 24px",
  margin: "20px 0",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center",
};

const link = {
  color: "#4CAF50",
  textDecoration: "none",
};
