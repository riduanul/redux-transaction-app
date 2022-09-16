import './App.css';
import Balance from './Components/Balance';
import Form from './Components/Form';
import Transection from './Components/Transection'

function App() {
  return (
    <div className="App">
            <div className="header">
                <h1>Expense Tracker</h1>
            </div>

            <div className="main">
                <div className="container">
                    <Balance />

                   <Form/>

                    <p className="second_heading">Your Transactions:</p>
                    <Transection/>
                    
                </div>
            </div>

            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
  );
}

export default App;
