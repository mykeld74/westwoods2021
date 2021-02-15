import React from 'react'

const DirectionModal = () => (
  <>
    <div style={{ width: '100%' }}>
      <h2>Join us this Sunday:</h2>
      <h3>9:00am</h3>
      <p>7700 Woodard Dr.</p>
      <p>Lakewood, CO 80227</p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus"
      frameBorder="0"
      allowFullScreen=""
      title="Westwoods Map"
      style={{ width: '100%', height: '50vh' }}
    ></iframe>
  </>
)

export default DirectionModal
