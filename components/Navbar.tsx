import Button from '@/components/utilities/Button'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import logo from '@/public/logo.svg'
import Image from 'next/image'

const Navbar = ({className}: {className?: string}) => {
	return (
		<header className={cn('border-b-2 border-black bg-orange', className)}>
			<div className="container mx-auto 2xl:max-w-[1920px] py-2 lg:py-4 px-6 lg:px-12 flex items-center justify-between">
				<Image src={logo} alt="Medium logo" className="w-36 lg:w-48 xl:w-auto" />

				<nav className="flex justify-end items-center font-sans font-semibold gap-2 lg:gap-10 text-sm lg:text-lg">
					<Link href="#">Sign in</Link>
					<Button className="bg-black text-white">Start writing</Button>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
