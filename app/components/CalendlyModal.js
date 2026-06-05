'use client'

import { useEffect } from 'react'

export default function CalendlyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      console.log('Modal opened')
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="calendly-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        backdropFilter: 'blur(6px)',
        animation: 'fadeInModal 0.3s ease'
      }}
    >
      <div
        className="calendly-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          width: '95%',
          maxWidth: '900px',
          height: '90vh',
          maxHeight: '800px',
          position: 'relative',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
          overflow: 'visible',
          animation: 'scaleInModal 0.3s cubic-bezier(0.22,1,0.36,1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#f0f0f0',
            border: 'none',
            fontSize: '28px',
            cursor: 'pointer',
            zIndex: 10000,
            color: '#333',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            padding: 0,
            lineHeight: '44px',
            textAlign: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e0e0e0'
            e.target.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f0f0f0'
            e.target.style.transform = 'scale(1)'
          }}
        >
          ✕
        </button>

        {/* Calendly Iframe */}
        <iframe
          src="https://calendly.com/bouramad900/30min?background_color=ffffff&hide_event_type_details=1"
          width="100%"
          height="100%"
          style={{
            display: 'block',
            border: 'none',
            borderRadius: '20px'
          }}
          title="Schedule a meeting"
          allow="camera; microphone; geolocation"
        />
      </div>

      <style jsx>{`
        @keyframes fadeInModal {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleInModal {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
