import {
    Body,
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

  
  const OrderConfirmation = ({name,title,price,transactionId,logo}) => (
    <Html>
      <Head />
      <Preview>Your order has been received - Thank you for shopping with us!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="../../public/logo.png"
            width="170"
            height="50"
            alt="MCyberAcadmey"
            // style={logo}
          />
          <Text style={header}>Thank you! <span>{name}</span></Text>
          <Text style={paragraph}>Your order has been received</Text>
  
          {/* Order details section */}
          <Section style={section}>
            <Text style={subHeader}>Order details</Text>
            <Hr style={hr} />
            <div style={detailsContainer}>
            <div className="text-left">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-500">Qty: 1</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Total</p>
                <p className="font-medium">{price}</p>
              </div>
            </div>
            <div className="border-t pt-2">
              {/* <p className="text-gray-600">Transaction Date: <span className="mr-2">{`${Date.getDate()}/${Date.getMonth()+1}/${Date.getFullYear()}`}</span> <span>{`${Date.getHours() % 12  || 12}:${Date.getMinutes()} ${Date.getHours() > 12 ? "pm" : "am"}`}</span></p> */}
              <p className="text-gray-600">Transaction ID: {transactionId}</p>
            </div>
          </div>
        </div>
            </div>
          </Section>
  
          {/* Products section */}
          {/* <Section style={section}>
            <Text style={subHeader}>Products</Text>
            <Hr style={hr} />
            <div style={detailsContainer}>
              <div style={productItem}>
                <Text style={paragraph}>1 x Maker Agency Theme - $39.00</Text>
                <Text style={downloadLink}><a href="#" style={link}>Download link 1</a> | <a href="#" style={link}>Download link 2</a></Text>
              </div>
              <div style={productItem}>
                <Text style={paragraph}>Corporate UI Kit - $12.00</Text>
                <Text style={downloadLink}><a href="#" style={link}>Download link 1</a> | <a href="#" style={link}>Download link 2</a></Text>
              </div>
              <div style={productItem}>
                <Text style={paragraph}>Dashboard admin panel - $36.00</Text>
                <Text style={downloadLink}><a href="#" style={link}>Download link 1</a> | <a href="#" style={link}>Download link 2</a></Text>
              </div>
            </div>
          </Section> */}
  
          <Hr style={hr} />
          <Text style={footer}>
            &copy; 2024 Your Company. All rights reserved.<br />
            <a href="mailto:email@company.com" style={link}>email@company.com</a><br />
            You&apos;ve received this email because you have an account with Your Company. <a href="#" style={link}>View your profile settings</a>.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default OrderConfirmation;
  
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
  
  const header = {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  };
  
  const subHeader = {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: "10px",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#333333",
    textAlign: "left",
    marginBottom: "10px",
  };
  
  const section = {
    marginBottom: "20px",
  };
  
  const detailsContainer = {
    padding: "0 20px",
  };
  
  const detailItem = {
    marginBottom: "10px",
  };
  
  const productItem = {
    marginBottom: "20px",
  };
  
  const downloadLink = {
    fontSize: "14px",
    textAlign: "left",
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
  