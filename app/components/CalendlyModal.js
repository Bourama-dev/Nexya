'use client'

import { useState } from 'react'

export default function CalendlyModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            width: '90%',
            maxWidth: '800px',
            height: '90vh',
            maxHeight: '800px',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            animation: 'scaleIn 0.3s cubic-bezier(0.22,1,0.36,1)'
          }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                fontSize: '28px',
                cursor: 'pointer',
                zIndex: 1001,
                color: '#333',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ✕
            </button>

            <iframe
              src="https://calendly.com/bouramad900/30min?embed_domain=nexya.vercel.app&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ borderRadius: '16px' }}
              title="Calendly"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}
