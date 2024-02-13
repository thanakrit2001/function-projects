import React from 'react'

import { DownloadCon } from './Style'

import mobileImg from '../../assets/mobile.jpg'
import boxshot from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

function Download() {
  return (
    <DownloadCon>
      <div
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <img width="100%" src={mobileImg} alt="" />
        <div
          style={{
            position: 'absolute',
            border: '2px solid hsla(0,0%,100%,.25)',
            borderRadius: '10px',
            background: '#000',
            display: 'flex',
            padding: '0.5rem',
            width: '60%',
            height: '100px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,100%)',
            justifyContent: 'space-between',
          }}
        >
          <img src={boxshot} />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '-10px',
            }}
          >
            <p>
              Stranger Things <br />
              <span style={{ color: '#0071eb', fontSize: '0.9rem' }}>
                Downloading...
              </span>
            </p>
            <p></p>
          </div>
          <img src={downloadIcon} alt="" />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ fontSize: '3rem' }}>
            Download your shows <br />
            to watch offline.
          </h3>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            Save your favorites easily and always have <br />
            something to watch.
          </p>
        </div>
      </div>
    </DownloadCon>
  )
}

export default Download
