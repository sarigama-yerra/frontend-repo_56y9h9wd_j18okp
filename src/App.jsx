import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WorkspacePreview from './components/WorkspacePreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WorkspacePreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
