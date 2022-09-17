import './App.css';
import Balance from './Components/Balance';
import Form from './Components/Form';
import Transactions from './Components/Transactions/Transactions'

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

                   
                    <Transactions />
                    
                </div>
            </div>

            <div className="footer">&copy;2022 Learn with Sumit</div>
        </div>
  );
}

export default App;
