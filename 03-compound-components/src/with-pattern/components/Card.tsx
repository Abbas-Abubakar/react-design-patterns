interface CardProps {
  children: React.ReactNode;
}

const Card = ({children}: CardProps ) => {
  return (
    <div className="card">{children}</div>
  )
}

const CardHeader = ({children}: CardProps) => {
  return (
    <div className="card__header">{children}</div>
  )
}

const CardImage = ({children}: CardProps) => {
  return (
    <div className="card__media">{children}</div>
  )
}

const CardBody = ({children}: CardProps) => {
  return (
    <div className="card__body">{children}</div>
  )
}

const CardFooter = ({children}: CardProps) => {
  return (
    <div className="card__footer">{children}</div>
  )
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card