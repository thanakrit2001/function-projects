import React from 'react'

import { KidsCon } from './Style'

import kidImg from '../../assets/kids.png'

function Kids() {
  return (
    <KidsCon>
      <div style={{ width: '100%' }}>
        <img width="100%" src={kidImg} />
      </div>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '2.9rem' }}>Create profiles for kids.</h3>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            Send kids on adventures with their favorite <br />
            characters in a space made just for them— <br />
            free with your membership.
          </p>
        </div>
      </div>
    </KidsCon>
  )
}

export default Kids
