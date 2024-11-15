import { createTheme } from '@mui/material';

const themes = [
  createTheme({
    palette: {
      primary: {
        main: 'rgba(244, 197, 80, 1)',
        light: ' rgba(255, 220, 134, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-1.png',
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(159, 186, 174, 1)',
        light: 'rgba(203, 222, 211, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-2.png',
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(159, 183, 206, 1)',
        light: 'rgba(191, 214, 234, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-3.png',
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(224, 163, 154, 1)',
        light: 'rgba(242, 192, 189, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-4.png',
    },
  }),
  createTheme({
    palette: {
      primary: {
        main: 'rgba(240, 170, 141, 1)',
        light: 'rgba(244, 200, 186, 1)',
      },
      text: {
        primary: '#000',
      },
    },
    images: {
      backgroundImage: '/block-5.png',
    },
  }),
];
export default themes;
