import { SessionProvider } from "next-auth/react"
import { GlobalStyles } from "../styles/Global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </SessionProvider>
    </>
  )
}

export default MyApp
