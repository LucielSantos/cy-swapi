import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store/store';
import { theme, GlobalStyle } from './styles';
import MainPage from './pages/main/main-container';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <MainPage />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}