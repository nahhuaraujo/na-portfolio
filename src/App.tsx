import { Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Footer, Header } from './components';
import { About, Home } from './pages';

const App = () => {
  return (
    <S.App>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-mi' element={<About />} />
        <Route path='/experiencia' element={<div>Experiencia</div>} />
        <Route path='/proyectos' element={<div>Proyectos</div>} />
        <Route path='/cv' element={<div>CV</div>} />
      </Routes>
      <Footer />
    </S.App>
  );
};

export default App;
