import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className="container">

        
        <h1 className='title-heading'>Lorem Ipsum is simply dummy text.</h1>
        <h2 className='subtitle-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <div className='container-wrapper'>
        <div className='join-meeting'>
          <label for="exampleInputEmail1" className='usernameLabel'>Email username</label>
          <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

          <label for="exampleInputEmail1" className='usernameLabel'>Email username</label>
          <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default App