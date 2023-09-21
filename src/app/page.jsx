import Header from './components/Header/page'
import MainContainer from './components/MainContainer/page'
import Script from 'next/script'



export default function Home({ children }) {
  return (
    <>
       <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-12HXW3XN43" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-12HXW3XN43');
        `}
      </Script>
    </div>
      <Header />
      <MainContainer>
         {children}
      </MainContainer>
      
    </>
  )
}
