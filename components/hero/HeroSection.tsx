import Button from '@/components/utilities/Button'
import Navbar from '@/components/Navbar'
import HeroHead from '@/components/hero/HeroHead'
import {cn} from '@/lib/utils'

const HeroSection = ({className}: {className?: string}) => {
	return (
		<div className={cn('h-[80vh] bg-orange flex flex-col', className)}>
			<div className="container mx-auto h-full items-end 2xl:max-w-[1920px] pl-12 flex justify-between">
				<div className="pb-12">
					<p className="text-white text-sm font-sans uppercase tracking-[0.4em] font-bold mb-5">Start a blog
						for free</p>
					<h1 className="max-w-[900px] text-9xl">Publish, grow, and earn, all in one place.</h1>
					<p className="max-w-[600px] text-lg font-sans font-medium mt-16">
						If you have a story to tell, knowledge to share, or a perspective to offer ——— welcome home.
						Sign up for free
						so your writing can thrive in a network supported by millions of readers ——— not ads.
					</p>
					<Button className="mt-16">Start writing</Button>
				</div>
				<div className="h-full w-[40%] border-l-2 border-black flex justify-center items-center">
					<HeroHead />
				</div>
			</div>
		</div>
	)
}

export default HeroSection
