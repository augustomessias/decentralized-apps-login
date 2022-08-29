import './App.css';

function App() {

  function doSignIn() {
    alert("Sign In");
  }

  function doSignUp() {
    alert("Sign Up");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <div>
          <button onClick={doSignIn}>Sign In with MetaMask</button>
          <button onClick={doSignUp}>Sign Up with MetaMask</button>
        </div>
      </header>
    </div>
  );
}

export default App;