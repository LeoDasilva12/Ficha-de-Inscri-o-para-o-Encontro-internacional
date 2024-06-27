import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaWhatsapp, FaGlobe } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(45deg, #4b6cb7, #182848);
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: 34rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #00bfa5;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <h2>Contacte os desenvolvedores</h2>
                <SocialLinks>
                    <SocialLink href="https://www.linkedin.com/in/j%C3%BAlio-carlos-domingos-b09044241/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://wa.me/951481538" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </SocialLink>
                    <SocialLink href="https://wildknuckles.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                        <FaGlobe />
                    </SocialLink>
                </SocialLinks>
                <FooterText>&copy; 2024. All rights reserved.</FooterText>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
