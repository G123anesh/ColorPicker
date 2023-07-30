import './App.css'
import Appfooter from './Components/Appfooter/Appfooter'
import Appheader from './Components/Appheader/Appheader'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
    <Appheader/>
    <main>
      <Home/>
    </main>
    <Appfooter/>
    </>
  )
}

export default App
