'use client'

import { fonts } from './fonts'
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import NextTopLoader from 'nextjs-toploader'

import {
  QueryClientProvider,
} from '@tanstack/react-query'

import { AnimatePresence } from 'framer-motion'
import { queryClient } from '@/utils/react-query'
import { usePathname } from 'next/navigation'
import theme from './chakra-theme'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname()

  const renderChildren = () => {
    return <>
      {children}
    </>
  }

  return (
    <html className={fonts.rubik.className} lang="en">
      <head>
        <link rel="shortcut icon" href="/app-icon.png" />
        <title>Stix OS - Database schema visualization and collaboration tool</title>
      </head>
      <body className={`${fonts.inter.className} bg-background-primary text-text-primary text-sm`} suppressHydrationWarning>
        <NextTopLoader color='#fff' />
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AnimatePresence mode="wait" initial={false}>
              <Suspense>
                {renderChildren()}
              </Suspense>
            </AnimatePresence>
          </QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}

