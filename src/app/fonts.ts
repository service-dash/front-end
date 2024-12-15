import { Rubik, Outfit, Poppins, Inter, Fira_Code } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})
const inter = Inter({
  subsets: ['latin'],
})

const outfit = Outfit({
  subsets: ['latin']
})

const fira = Fira_Code({
  subsets: ['latin']
})

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"]
})

export const fonts = {
  rubik,
  poppins,
  outfit,
  inter,
  fira
}