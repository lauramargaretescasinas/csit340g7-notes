import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'

function App() {
  return (
    <div className="bg-[#f5f5f5] font-light text-[#111]">
      <Notes />
      {/* fixed */}
      <Info name="Laura Margaret C. Escasinas" />
    </div>
  )
}

export default App