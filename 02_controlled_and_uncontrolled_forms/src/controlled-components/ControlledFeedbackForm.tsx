import { useRef, useState } from "react"

const ControlledFeedbackForm = () => {
  const [form, setForm] = useState({name: "", email: "", message: "",})
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const handleFormSubmit =  (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

      if(!form.name) {
        nameRef.current?.focus()
        return
      }

      if(!form.email) {
        emailRef.current?.focus()
        return
      }

      if(!form.message) {
        messageRef.current?.focus()
        return
      }

    console.log("form data: ", form);

  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm({...form, [name]: type === "checkbox" ? "checked" : value})
  }
  
  return (
    <form className="contact-form" onSubmit={handleFormSubmit}>
      <div className="contact-form__field">
        <label className="contact-form__label">Name</label>
        <input className="contact-form__input" name="name" onChange={handleChange} value={form.name} ref={nameRef} placeholder="Enter your name" />
      </div>
 
      <div className="contact-form__field">
        <label className="contact-form__label">Email</label>
        <input className="contact-form__input" name="email" onChange={handleChange} value={form.email} ref={emailRef} placeholder="Enter your email" />
      </div>
 
      <div className="contact-form__field">
        <label className="contact-form__label">Message</label>
        <textarea className="contact-form__textarea" name="message" onChange={handleChange} value={form.message} ref={messageRef} placeholder="Enter your message" rows={5} />
      </div>
 
      <button className="contact-form__submit" type="submit">
        Submit
      </button>
    </form>
  )
}

export default ControlledFeedbackForm