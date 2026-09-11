
const ErrorPage = ({message}: {message: string}) => {
  return (
    <div className="error-page">
      <h2 className="error-page__title">Whoops!</h2>
      <h3 className="error-page__subtitle">Something went wrong.</h3>
      <p className="error-page__message">{message}</p>
    </div>
  )
}

export default ErrorPage