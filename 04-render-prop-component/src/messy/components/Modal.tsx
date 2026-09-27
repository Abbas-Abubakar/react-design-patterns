import './App.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h2>{title}</h2>

          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="modal__body">
          {children}
        </div>

        <div className="modal__footer">
          <button
            className="modal__button modal__button--secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="modal__button modal__button--primary"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal