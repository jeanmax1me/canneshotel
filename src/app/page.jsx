import Header from './components/Header/page'
import MainContainer from './components/MainContainer/page'


export default function Home({ children }) {
  return (
    <>
      <Header />
      <MainContainer>
         {children}
      </MainContainer>
      
    </>
  )
}
