import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div style={{ height: "100vh" }} className="container">
        <h1 className='title-heading'>Lorem Ipsum is simply dummy text.</h1>
        <h2 className='subtitle-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <div className='container-wrapper'>
          <div className='join-meeting'>
            <label style={{color: "white"}} className='formLabels'> Room Id</label>
            <input type="email" className="form-control formInputBS" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

            <label style={{color: "white", marginTop : "16px"}} className='formLabels'>Username</label>
            <input type="email" className="form-control formInputBS" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

            <button style={{backgroundColor:"#68D585", border:"0"}}className='joinRoomBtn'>Join Room</button>
            <label style={{color: "white"}}> Want to create Room? Let's create</label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App