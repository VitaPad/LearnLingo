import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*      <Route path="/learnlingo/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
