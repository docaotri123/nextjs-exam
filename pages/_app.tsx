import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from '../services';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   // on route change complete - run auth check 
  //   router.events.on('routeChangeComplete', () => {
  //     console.log(userService.userValue);
      
  //   })

  //   // unsubscribe from events in useEffect return function
  //   return () => {
  //     router.events.off('routeChangeComplete', () => {});
  //   }

  // }, []);

  return <Component {...pageProps} />
}
