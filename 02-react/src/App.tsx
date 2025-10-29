import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header, MenuPages } from './components/Navbar';
import { AllRoutes } from './components/Routes/AllRoutes';


export const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <MenuPages />
      </Header>
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
