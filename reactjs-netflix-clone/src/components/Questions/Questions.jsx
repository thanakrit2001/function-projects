import { useState } from 'react'
import React from 'react'

import { QuestionCon } from './Style'

function Questions({ title, info }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <QuestionCon>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#303030',
            fontSize: '1.5rem',
            width: '815px',
            borderBottom: '1px solid #000',
            padding: '1rem 2rem',
          }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center' }}>{title}</h3>
          <button
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '3rem',
              color: '#fff',
              cursor: 'pointer',
            }}
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? '-' : '+'}
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {showInfo && (
          <p
            style={{
              backgroundColor: '#303030',
              fontSize: '1.5rem',
              width: '815px',
              padding: '1rem 2rem',
              marginBottom: '0.5rem',
              textAlign: 'left',
            }}
          >
            {info}
          </p>
        )}
      </div>
    </QuestionCon>
  )
}

export default Questions
