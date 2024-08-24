import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './styles/globals.css'

import { Providers } from '@/components/providers'

const fontSans = localFont({
    src: './fonts/Walsheim.woff2',
    variable: '--font-sans'
})
const fontMono = localFont({
    src: './fonts/JetbrainsMono.woff2',
    variable: '--font-mono'
})

export const metadata: Metadata = {
    title: {
        template: '%s / Cleon Next',
        default: 'Cleon Next'
    },
    description: 'Next.js 14 Starter Kit with Cleon-UI'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${fontSans.variable} ${fontMono.variable} antialiased min-h-svh bg-background font-sans`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
