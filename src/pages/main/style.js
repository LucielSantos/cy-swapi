import styled from 'styled-components';
import { swLogo } from '../../assets/images';

export const Container = styled.div`
  padding: 3rem;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  box-sizing: border-box;
`;

export const LogoImage = styled.img.attrs({
  src: swLogo,
  alt: 'main-logo',
})`
  height: 8rem;
`;