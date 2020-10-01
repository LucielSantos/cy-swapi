import styled from 'styled-components';
import { swLogo } from '../../assets/images';

export const Container = styled.div`
  padding: 3rem;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 10rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
`;

export const Body = styled.div`
  width: 100%;
  height: 70%;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const LogoImage = styled.img.attrs({
  src: swLogo,
  alt: 'main-logo',
})`
  height: 100%;
  margin: 0 auto;
`;