import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/home'
import { Error } from './pages/404';
import { Contact } from './pages/contact';
import { Prescript } from './pages/prescript';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/prescript' element={<Prescript />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
