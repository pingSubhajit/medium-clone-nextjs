'use client'

import Lenis from '@studio-freight/lenis'
import {ReactNode, useEffect} from 'react'

const SmoothScrollProvider = ({ children }: {children: ReactNode}) => {
	useEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
		})

		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return (
		<div>
			{children}
		</div>
	)
}

export default SmoothScrollProvider