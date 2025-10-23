import './App.css'
import { Header, MenuPages } from './components/Navbar'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <Header>
        <MenuPages />
      </Header>
      <Home/>
    </>
  )
}

export default App
