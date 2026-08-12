import './App.css'
import Accordion from './Accordion'

function App() {

  const categories = [
    {
      title: 'Books',
      items: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']
    }, {
      title: 'Movies',
      items: ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction']
    }, {
      title: 'Music',
      items: ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California', 'Imagine']
    }, {
      title: 'Games',
      items: ['The Legend of Zelda', 'Super Mario Bros.', 'Minecraft', 'Fortnite']
    }
  ]

  return (
    <>
     <Accordion categories={categories} />
    </>
  )
}

export default App
