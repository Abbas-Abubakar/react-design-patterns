
const UncontrolledComponent = () => {

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    console.log("form data: ", data);

  }



  return (
      <form className="contact-form" onSubmit={handleFormSubmit}>
      <div className="contact-form__field">
        <label className="contact-form__label">Name</label>
        <input className="contact-form__input" name="name" placeholder="Enter your name" />
      </div>
 
      <div className="contact-form__field">
        <label className="contact-form__label">Email</label>
        <input className="contact-form__input" name="email" placeholder="Enter your email" />
      </div>
 
      <div className="contact-form__field">
        <label className="contact-form__label">Message</label>
        <textarea className="contact-form__textarea" name="message" placeholder="Enter your message" rows={5} />
      </div>
 
      <button className="contact-form__submit" type="submit">
        Submit
      </button>
    </form>
  )
}

export default UncontrolledComponent