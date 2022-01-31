import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <TopLogo src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the last Dragon for an addition fee
          with a Desney+ subscription. As of 2/1/22, the price and the Disney
          Bundle will increase by $1.
        </Description>
        <BottomLogo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh - 70px);

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  padding: 80px 40px;
`;

const TopLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const SignUp = styled.a`
  text-align: center;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 4px;
  font-size: 18px;
  margin: 12px 0;
  cursor: pointer;
  letter-spacing: 1.5px;
  transition-duration: 250ms;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 1.5;
`;

const BottomLogo = styled.img`
  width: 90%;
`;
