import DailyView from './components/DailyView'
import liftData from './components/HardCodedDailyView.json'

function App() {
  return (
    <>
    <DailyView liftData={liftData}/>
    </>
  )
}

export default App
