
import './App.css';

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
  return (
    <div>
      <h3>This is a magic button</h3>
      <button>MagicButton</button>
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
      </header>
    </div>
  );
}

export default App;
