import { Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/rgb/:red/:green/:blue" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
