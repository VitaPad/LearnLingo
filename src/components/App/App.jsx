import { Route, Routes } from 'react-router-dom';
/* import Home from '../../pages/Home/Home'; */
import { /* createTheme */ ThemeProvider } from '@mui/material/styles';
import 'normalize.css';

import CssBaseline from '@mui/material/CssBaseline';
import { lazy, Suspense, useState } from 'react'; /* 
import Teachers from '../../pages/Teachers/Teachers'; */
/* import Favorites from '../../pages/Favorites/Favorites'; */
import themes from '../Themes/Themes';
import Loading from '../Loading/Loading';
import { ToastContainer } from 'react-toastify';
import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css';

const Home = lazy(() => import('../../pages/Home/Home'));
const Teachers = lazy(() => import('../../pages/Teachers/Teachers'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const toggleTheme = () => {
    setCurrentThemeIndex(prevIndex => (prevIndex + 1) % themes.length);
  };

  return (
    <ThemeProvider theme={themes[currentThemeIndex]}>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        {/*    <div className={css.toastContainer}> */}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          closeOnClick
          closeButton={false}
          pauseOnHover
          draggable
          toastClassName="custom-toast"
          limit={1}
        />
        {/*         </div> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                theme={themes[currentThemeIndex]}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/teachers"
            element={
              <Teachers
                theme={themes[currentThemeIndex]}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                theme={themes[currentThemeIndex]}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
