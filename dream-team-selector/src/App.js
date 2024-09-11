
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import DreamTeam from './components/DreamTeam/dreamTeam';

import DreamTeamSelection from './components/DreamTeam/TeamSelection/DreamTeamSelection';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dreamteam" element={<DreamTeam />} />
          <Route path="/teamselection" element={<DreamTeamSelection />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
