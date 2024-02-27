import './App.css'
import {Header, Footer, Hero} from './assets/components'
function App() {

  return (
    <div className='bg-gradient-to-b from-yellow-50 to-amber-200 flex justify-center'>
      <div className='flex flex-col w-[99%] h-[99%]'>
        <Header />
        <Hero />
        <Footer />

      </div>
    </div>
  )
}

export default App
