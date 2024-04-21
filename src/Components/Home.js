import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="home-container">
      <h1>React Final Project</h1>
      <p>This is homepage.</p>
      <Link to="/users">
        <Button variant="info">Join</Button>
      </Link>
    </div>
  );
}

export default Home;