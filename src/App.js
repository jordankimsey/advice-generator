import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './components/footer';
import Container from './components/container';

function App() {
  const fetchAdvice = async () => {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get('https://api.adviceslip.com/advice');
      const data = response.data.slip;
      setLoading(false);
      setAdvice({
        id: data.id,
        advice: data.advice
      })
    } catch (error) {
      setLoading(false)
      setError(true);
      setAdvice({
        id: null,
        advice: null,
      });
      console.log(error)
    }
  };

  const [advice, setAdvice] = useState({
    id: null,
    advice: null
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='App'>
      <Container advice={advice} error={error} loading={loading} fetchAdvice={ fetchAdvice}/>
      <Footer />
    </div>
  );
}

export default App;
