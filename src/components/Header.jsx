import globe  from '../images/globe.png'

export function Header() {
  return (
    <header> 
        <img src={globe} alt="Globe icon"/>
        <h1> my travel journal </h1>
    </header>
  )
}
