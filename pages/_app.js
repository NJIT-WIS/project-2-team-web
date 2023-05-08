//this makes the styles and privacy policy global
import '../styles/global.css'
import PrivacyPolicyPopup from '../components/privacy-pop-up';
import '../i18n';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTranslationData } from '../i18n';
import Router from 'next/router';
import withGA from 'next-ga';
import { pageview } from '../lib/google-analytics';

function App({ Component, pageProps }) {
  const [translationData, setTranslationData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const locale = router.query.locale || 'en';
    const data = getTranslationData(locale);
    setTranslationData(data);
  }, [router.query.locale]);
  
  return (
    <>
      <h1>{translationData.welcome}</h1>
      <Component {...pageProps} />
      <PrivacyPolicyPopup />
    </>
  );
}

export default withGA('G-TBPFJR2B7M', Router)(App);