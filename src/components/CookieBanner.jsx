import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
  return (
    <CookieConsent
      style={styles.banner}
      buttonStyle={styles.button}
      contentStyle={styles.content} 
      buttonText="Akceptuję"
    >
      Ta strona używa plików cookie dla lepszego działania. Więcej w <a href='/polityka-prywatnosci' style={{color: '#c5a059'}}>polityce prywatności</a>
    </CookieConsent>
  );
};

const styles = {
  banner: {
    backgroundColor: '#252525',
    color: '#fff',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px 20px',
  },

  content: {
    flex: '0 1 auto',
    margin: '0',
  },

  button: {
    backgroundColor: '#c5a059',
    color: '#000',
    borderRadius: '4px',
    margin: '0',
    padding: '8px 20px',
  }
};