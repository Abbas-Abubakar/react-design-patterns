import { useState, type ReactNode } from "react"

interface ToggleRenderProps {
  isOpen: boolean,
  handleToggle: () => void
}

interface ToggleComponentProps {
  children: (props: ToggleRenderProps) => ReactNode
}


const ToggleComponent = ({ children } : ToggleComponentProps ) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      {children({isOpen, handleToggle})}
    </div>
  )
}

export default ToggleComponent