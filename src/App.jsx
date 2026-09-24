import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={0} onOpenCart={() => {}} />
      <main className="flex-grow-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
