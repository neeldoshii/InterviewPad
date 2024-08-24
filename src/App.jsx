import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Layout from './layout';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{height : "100vh"}}>
      <Header />
      <Layout>
      <>
      <div>
        
        <h1 className='title-heading'>Lorem Ipsum is simply dummy text.</h1>
        <h2 className='subtitle-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', width : '100%', height : "100%"
        }}>
        <div className='join-meeting'>
          <label for="exampleInputEmail1" className='usernameLabel'>Email username</label>
          <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

          <label for="exampleInputEmail1" className='usernameLabel'>Email username</label>
          <input type="email" className="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        </div>
        

      </div>
      
      </>
      </Layout>
      {/* <div>
        
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
        

      </div> */}
      
    </div>
  )
}
// App.Layout = Layout
export default App