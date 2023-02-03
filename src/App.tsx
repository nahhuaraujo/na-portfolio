import { Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Footer, Header } from './components';
import { About, Experience, Home, Projects } from './pages';

const App = () => {
  return (
    <S.App>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-mi' element={<About />} />
        <Route path='/experiencia' element={<Experience />} />
        <Route path='/proyectos' element={<Projects />} />
      </Routes>
      <Footer />
    </S.App>
  );
};

export default App;
