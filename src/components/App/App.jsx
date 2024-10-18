import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'normalize.css';

import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
const themes = [
  createTheme({
    palette: {
      primary: {
        main: 'rgba(251, 233, 186, 1)', // Жовта кнопка
      },
      text: {
        primary: '#000',
      },
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(203, 222, 211, 1)', // Зелена кнопка
      },
      text: {
        primary: '#000',
      },
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(191, 214, 234, 1)', // Синя кнопка
      },
      text: {
        primary: '#000',
      },
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(242, 192, 189, 1)', // Червона кнопка
      },
      text: {
        primary: '#000',
      },
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(244, 200, 186, 1)', // Оранжева кнопка
      },
      text: {
        primary: '#000',
      },
    },
  }),
];

function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const toggleTheme = () => {
    setCurrentThemeIndex(prevIndex => (prevIndex + 1) % themes.length);
  };

  return (
    <ThemeProvider theme={themes[currentThemeIndex]}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <Home theme={themes[currentThemeIndex]} toggleTheme={toggleTheme} />
          }
        />
        {/*      <Route path="/learnlingo/about" element={<About />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
