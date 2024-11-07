import React from 'react'
import "../../public/stylesheets/Footer.css";
const Footer = () => {
  return (
<footer className="footer bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      {/* Newsletter Subscription */}
      <div className="col-md-6 mb-1 text-center justify-content-center mt-3">
        <div className='d-flex justify-content-center'>
        <div>
        <h5>Subscribe to Our Newsletter</h5>
        <p>Stay updated with the latest offers and updates.</p>
        </div>
        <div className='my-2 mx-2'>
        <button className="btn btn-primary btn-sm">Subscribe</button>
        </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="col-md-6 mb-1 text-center">
        <h5>Contact Us</h5>
        <div><i className="bi bi-envelope"></i> support@snapbuy.com</div>
        <div><i className="bi bi-telephone"></i> +91 9123456789</div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="text-center">
      <p className="mb-0">© 2024 SnapBuy. All Rights Reserved.</p>
      <p>Made with ❤️ by SnapBuy</p>
    </div>
  </div>
</footer>

  )
}

export default Footer