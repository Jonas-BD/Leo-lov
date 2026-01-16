import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav/nav'
import { Main } from './components/Main/main'
import { Header } from './components/Header/header'
import { Footer } from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
