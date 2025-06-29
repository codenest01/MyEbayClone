import React from 'react';
import "../../styles/layout/UserGateway/userLogin.css"; 

export default function UserLogin() {
  return (
   <>
   <div>
    <a href="/">
   <img
           href="/"
            src="data:image/png;base64,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"
            alt=""
            className="ms-1 mt-5"
            style={{ height: "58px", widows: "auto" }}
          />
          </a>
   </div>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <section className="text-center mb-4">
          <h2 style={{ fontSize: "1.5rem", lineHeight: "32px", fontWeight: 700 }}>Sign in to your account</h2>
          <span>New to eBay? <a href="/create-account" className="text-dark">Create account</a></span>
        </section>

        <form>
          <div className="mb-3">
          <input 
  type="text" 
  className="w-100" 
  id="name" 
  placeholder="Email or username" 
  style={{ 
    outline: "none", 
    height: "39px", 
    paddingLeft: "0.5rem", // equivalent to Bootstrap ms-2
    fontSize: "0.875rem",  // smaller font size (14px)
    borderRadius: "6px",   // subtle border radius
    border: "1px solid #ccc" // optional: better visible border
  }} 
/>

          </div>

          <div className="signInButton">
            <button type="submit" className="button w-100">Continue</button>
          </div>

          {/* OR separator */}
          <section style={{ display: "flex", alignItems: "center", width: "100%", margin: "20px 10px" }}>
            <div style={{ flex: 1, borderTop: "1px solid #ccc" }}></div>
            <span style={{ margin: "0 12px", whiteSpace: "nowrap" }}>or</span>
            <div style={{ flex: 1, borderTop: "1px solid #ccc" }}></div>
          </section>

          {/* Social Buttons */}
          <div className="ms-5 socialBtns">
            <button aria-label="Continue with Google">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" />
              Continue with Google
            </button>

            <button className="mt-4" aria-label="Continue with Facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook logo" />
              Continue with Facebook
            </button>

            <button className="mt-4" aria-label="Continue with Apple">
              <img src="https://www.svgrepo.com/show/303110/apple-black-logo.svg" alt="Apple logo" />
              Continue with Apple
            </button>
          </div>

          {/* Stay signed in */}
          <div className="w-100 text-center mt-4">
            <input type="checkbox" id="staySignedIn" />
            <label htmlFor="staySignedIn" className='ms-2'>Stay Signed In</label>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
