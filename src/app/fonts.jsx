import { Playfair_Display, Alegreya_Sans, Proza_Libre } from 'next/font/google'


export const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
export const alegreya = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
})
export const proza = Proza_Libre({
    subsets: ['latin'],
    weight: ['600', '400', '500', '700', '800'],
})