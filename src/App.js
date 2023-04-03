import { useState } from 'react';
import { supabase } from './supabaseClient.js';
import './App.css';

function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    // Update the state
    setMyBooks(books);
  }
  getBooks();
  return (
    <table className='Lib'>
    {
      myBooks.map(b => (
        <tr className='Books'>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  );
}

const magazines = [
  {id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true},
  {id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true},
  {id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false},
]
function ZineRack () {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemmingway',
  published: '1929'
};

function DisplayBook () {
  return (
    <div>
      <h3>{book.title} by {book.author} ({book.published})</h3>
    </div>
  )
}

function MagicButton () {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>MagicButton {count}</button>
    </div> 
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MagicButton />
        <DisplayBook />
        <ZineRack />
        <Library />
      </header>
    </div>
  );
}

export default App;
