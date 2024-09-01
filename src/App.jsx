import React, { useState } from 'react';
import './App.css';



const choices = ['rock', 'paper', 'scissors'];

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  const handleUserChoice = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult('It\'s a Draw!');
      setDrawScore(drawScore + 1);
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) {
      setResult('You Win!');
      setUserScore(userScore + 1);
    } else {
      setResult('Computer Wins!');
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="scoreboard">
        <p>User Score: {userScore}</p>
        <p>Computer Score: {computerScore}</p>
        <p>Draws: {drawScore}</p>
      </div>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      <div className="results">
        <p>Your Choice: {userChoice}</p>
        <p>Computer's Choice: {computerChoice}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;

