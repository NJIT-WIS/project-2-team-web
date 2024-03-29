// components/PrivacyPolicyPopup.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link'

const PrivacyPolicyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const privacyPolicyAccepted = Cookies.get('privacyPolicyAccepted');
    if (!privacyPolicyAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('privacyPolicyAccepted', 'true', { expires: 365 });
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <h2>Privacy Policy</h2>
          <p>
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies, as stated in our <Link href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.           
          </p>
          <button onClick={handleAccept}>Accept</button>
          <style jsx>{`
            .popup {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: white;
              padding: 20px;
              text-align: center;
              box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
            }

            button {
              margin-top: 30px;
              padding: 10px 20px;
              background-color: #2563EB;
              color: white;
              border: none;
              cursor: pointer;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicyPopup;
