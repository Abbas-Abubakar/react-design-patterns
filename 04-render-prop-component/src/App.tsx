
import './App.css'
import AccordionItem from './with-pattern/components/AccordionItem'
import ToggleComponent from './with-pattern/ToggleComponent'

function App() {


  return (
    <>
      <ToggleComponent>
        {({ isOpen, handleToggle }: { isOpen: boolean, handleToggle: () => void }) => (
          <>
            <span style={{marginRight: "1rem"}}>Status: {isOpen ? "Active" : "Not Active"}</span>
            <button onClick={handleToggle}>Toggle</button>

          </>
        )
        }
      </ToggleComponent>

      <ToggleComponent>
        {({ isOpen, handleToggle }: { isOpen: boolean, handleToggle: () => void }) => <AccordionItem isOpen={isOpen} onToggle={handleToggle} />
        }
      </ToggleComponent>
    </>
  )
}

export default App
