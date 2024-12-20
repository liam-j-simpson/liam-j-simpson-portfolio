import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
const Home = () => <h2 className="font-larken text-8xl">Home Page</h2>
const Work = () => <h2 className="font-larken text-8xl">Work</h2>
const Contact = () => <h2 className="font-larken text-8xl">Contact</h2>

export default App
