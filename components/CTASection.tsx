import {cn} from '@/lib/utils'
import Button from '@/components/utilities/Button'
import ctaBg from '@/public/cta_bg.jpg'
import Image from 'next/image'

const CTASection = ({className}: {className?: string}) => {
	return (
		<div className={cn('relative', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] p-12 flex flex-col items-start gap-12">
				<h2 className="max-w-[900px] text-8xl text-white">
					Earn money from your writing.
				</h2>
				<p className="max-w-[500px] font-sans font-medium text-lg leading-6 text-white">
					Writing has its rewards when you join the Partner Program. Learn how to get paid for the content you publish
					and the audiences you build.
				</p>
				<Button className="bg-black text-white">Learn more</Button>
			</div>

			<Image src={ctaBg} alt='BG for this CTA section' className="absolute inset-0 w-full h-full -z-10" />
		</div>
	)
}

export default CTASection
