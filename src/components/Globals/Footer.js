import React from "react"

function Footer() {
  return (
    <footer className="footer fixed-bottom text-white">
      <div className="container ml-2">
        <h6>
          Bellr cakes &copy;{new Date().getFullYear().toString()} all rights
          reserved
        </h6>
      </div>
    </footer>
  )
}

export default Footer
