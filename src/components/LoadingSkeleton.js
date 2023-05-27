import React from 'react'

export default function LoadingSkeleton() {
  return (
    <div className="position-absolute top-0 start-0 d-flex justify-content-center align-items-center h-100 w-100">
        <div className="loader text-success spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
