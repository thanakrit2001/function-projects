import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import Kids from './components/Kids/Kids'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />
      <div
        style={{
          padding: '3rem',
          background: '#000',
          color: '#fff',
          textAlign: 'center',
          borderBottom: '8px solid #222',
        }}
      >
        <h3 style={{ fontSize: '3rem', marginBottom: '3rem' }}>
          Frequently Asked Questions
        </h3>
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <p style={{ fontSize: '1.2rem', margin: '2rem 0' }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          style={{
            width: '500px',
            height: '70px',
            padding: '1.5rem 1rem',
          }}
          type="email"
          placeholder="Email address"
        />
        <button
          style={{
            width: '200px',
            padding: '1.3rem 1rem',
            backgroundColor: '#e50914',
            color: '#fff',
            fontSize: '1.5rem',
            border: 'none',
            position: 'relative',
            top: '4px',
          }}
          type="submit"
        >
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default App
