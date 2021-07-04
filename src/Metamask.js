import "wired-elements";
import { useEffect, useState } from "react";
const Web3 = require("web3");

// useEffect(() => {
//   ethEnabled();
// }, []);

const Metamask = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const ethEnabled = async () => {
    if (window.ethereum) {
      setTimeout(() => {
        setLoggedIn((loggedIn) => !loggedIn);
      }, 5000);

      await window.ethereum.send("eth_requestAccounts");
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    setLoggedIn(false);
    return false;
  };

  return (
    <div className="btn-container">
      {loggedIn ? (
        <h4>Connected to Metamask</h4>
      ) : (
        <wired-button onClick={ethEnabled}> Connect to Metamask</wired-button>
      )}
    </div>
  );
};

export default Metamask;
