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
        main: 'rgba(244, 197, 80, 1)', // Жовта кнопка
        light: 'rgba(251, 233, 186, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-1.png', // Зображення для жовтої теми
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(159, 186, 174, 1)', // Зелена кнопка
        light: 'rgba(203, 222, 211, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-2.png', // Зображення для жовтої теми
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(159, 183, 206, 1)', // Синя кнопка
        light: 'rgba(191, 214, 234, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-3.png', // Зображення для жовтої теми
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(224, 163, 154, 1)', // Червона кнопка
        light: 'rgba(242, 192, 189, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-4.png', // Зображення для жовтої теми
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(240, 170, 141, 1)', // Оранжева кнопка
        light: 'rgba(244, 200, 186, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-5.png', // Зображення для жовтої теми
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
