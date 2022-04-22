import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/home'
import { Error } from './pages/404';
import { Contact } from './pages/contact';
import { Prescript } from './pages/prescript';
import { Dashboard } from './pages/dashboard';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/app' element={<Prescript />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );

}

export default App;
