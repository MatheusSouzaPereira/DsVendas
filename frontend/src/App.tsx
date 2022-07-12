import { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import NotificationButton from './components/NotificationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            
          <Card/>
    </div>

        </section>
     </main>
    </>
  )
}

export default App
