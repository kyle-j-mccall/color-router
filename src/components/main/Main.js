import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <main style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      {`RGB(${red}, ${green}, ${blue})`}
    </main>
  );
}
