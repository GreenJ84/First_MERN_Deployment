import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Display from './views/Display';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={ <Main />} path='/' />

        <Route element={ <Create /> } path='/new' />

        <Route element= { <Display /> } path='/display/:id' />

        <Route element= { <Update /> } path='/update/:id' />
      </Routes>
    </div>
  );
}

export default App;
