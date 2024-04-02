import {cn} from '@/lib/utils'
import Button from '@/components/utilities/Button'
import logo from '@/public/logo.svg'
import Image from 'next/image'

const Footer = ({className}: {className?: string}) => {
	return (
		<footer className={cn(className)}>
			<div className="bg-black">
				<div className="container mx-auto 2xl:max-w-[1920px] py-12 px-12 flex justify-center items-center gap-8">
					<p className="text-white font-sans font-medium text-xl tracking-wide">Looking for help getting started?</p>
					<Button>Check out our guide</Button>
				</div>
			</div>

			<div className="container mx-auto 2xl:max-w-[1920px] py-4 px-12 flex justify-between items-center">
				<Image src={logo} alt="Medium logo" className="h-6"/>
				<p className="font-sans font-semibold text-lg">Every idea needs a Medium</p>
				<nav>
					<ul className="flex gap-8 font-sans font-bold text-sm">
						<li>About</li>
						<li>Terms</li>
						<li>Privacy</li>
						<li>Help</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
