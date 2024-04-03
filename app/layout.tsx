import type { Metadata } from 'next'
import { Inter, Libre_Caslon_Text } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/utilities/SmoothScrollProvider'

const inter = Inter({ subsets: ['latin'] })
const libreCaslonText = Libre_Caslon_Text({ subsets: ['latin'], weight: ['400', '700']})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, libreCaslonText.className)}>
				<SmoothScrollProvider>
					<Navbar />
					{children}
					<Footer />
				</SmoothScrollProvider>
			</body>
		</html>
	)
}
