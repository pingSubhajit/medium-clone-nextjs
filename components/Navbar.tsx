import Button from '@/components/utilities/Button'
import Link from 'next/link'

const Navbar = ({className}: {className?: string}) => {
	return (
		<div className="container mx-auto 2xl:max-w-[1920px] py-4 px-12 border-b-4 border-black">
			<nav className="flex items-center justify-between">
				<div>
					<img src="/logo.svg" alt="Medium Logo"/>
				</div>

				<div className="flex justify-end items-center font-sans font-semibold gap-10 text-lg">
					<Link href="#">Sign in</Link>
					<Button className="bg-black text-white">Start writing</Button>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
