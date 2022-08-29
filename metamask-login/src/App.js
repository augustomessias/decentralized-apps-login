import './App.css';
import { useState } from 'react';
import { ethers } from "ethers";

function App() {

  const [error, setError] = useState("");
  const [wallet, setWallet] = useState("");

  function doSignIn() {
    if(!window.ethereum) return setError("No MetaMask wallet found");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.send("eth_requestAccounts", [])
      .then(accounts => {
        if(!accounts || !accounts.length) {
          return setError("No crypto wallet found");
        }

        localStorage.setItem("wallet", accounts[0]);
        setWallet(accounts);
      })
      .catch(err => setError(err.message))
  }

  function doSignUp() {
    window.location.href = "https://metamask.io/download/";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <div>{error}</div>
        <div>{wallet}</div>
        <div>
          <button onClick={doSignIn}>Sign In with MetaMask</button>
          <button onClick={doSignUp}>Sign Up on MetaMask.io</button>
        </div>
      </header>
    </div>
  );
}

export default App;