
import './App.css'
import CardComponent from './messy/CardComponent'
import Card from './with-pattern/components/Card'

function App() {


  return (
    <>
      {/* CARD COMPONENT */}
      {/* Messy Card Components */}
      {/* <CardComponent icon={"🚀"} title={"Simple Card"} description={"This is a simple card component."} ctaText={"Get Started"}/>
      <CardComponent image='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' price={19.99} rating={4.5}  title={"Nike Shoe"} description={"Premium running shoes for everyday use."} showAddToCart={true} showBadge={true}/> */}

      {/* Compound Card Components */}
      <Card>
        <Card.Image>
          <img className='card__img' src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </Card.Image>
        <Card.Body>
          <h2 className="card__title">Nike Shoe</h2>
          <p className="card__description">Premium running shoes for everday use..</p>
          <div className="card__meta">
             <span className="card__rating">
                <span className="card__star" aria-hidden="true">★</span>
                4.8
              </span>
          </div>
        </Card.Body>
        <Card.Footer>
          <button className="card__add-to-cart">Add to Cart</button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>
          <div className="card__icon">📚</div>
        </Card.Header>

        <Card.Body>
          <h2>Learn Hausa</h2>
          <p>Start your journey learning Hausa.</p>
        </Card.Body>

        <Card.Footer>
          <button className='card__cta'>Start Learning</button>
        </Card.Footer>
      </Card>

    </>
  )
}

export default App
