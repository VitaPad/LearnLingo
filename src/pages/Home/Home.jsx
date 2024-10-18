import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';

function Home({ theme, toggleTheme }) {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
    </>
  );
}

export default Home;
