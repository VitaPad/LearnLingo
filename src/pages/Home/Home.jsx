import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import StatsSection from '../../components/StatsSection/StatsSection';

function Home({ theme, toggleTheme }) {
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <StatsSection theme={theme} />
    </div>
  );
}

export default Home;
