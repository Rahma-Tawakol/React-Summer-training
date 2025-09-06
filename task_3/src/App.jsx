import { useState } from 'react'
import './App.css'
import Slider from './components/sliders';

export default function App() {
  return (
    <div>
      <h1 className='header'>My slides</h1>
      <Slider />
    </div>
  );
}
