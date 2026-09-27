import { useState } from "react"

const AccordionItem = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const handleToggle = () => {
      setIsOpen(prev => !prev)
    }
  
  return (
    <div className="accordion">
      <button onClick={handleToggle} className="accordion__title">Lorem Ipsum dolor sit</button>
      {isOpen && (
        <article className="accordion__content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, earum alias delectus doloribus facere iusto, autem repellat distinctio doloremque reiciendis voluptatem dolore minima enim adipisci amet. Veniam debitis provident fugiat?
        </article>
      )}
    </div>
  )
}

export default AccordionItem