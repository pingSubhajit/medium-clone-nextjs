import {cn} from '@/lib/utils'
import phone1 from '@/public/phone_1.png'
import phone2 from '@/public/phone_2.png'
import Image from 'next/image'
import Button from '@/components/utilities/Button'
import Separator from '@/components/utilities/Separator'

const CreateYourSpaceSection = ({className}: {className?: string}) => {
	return (
		<div className={cn('bg-peach', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] px-12 pt-12 flex justify-between">
				<div className="pb-12 w-[50%] flex flex-col justify-between">
					<h2 className="max-w-[700px] text-8xl">
						Create your space.
					</h2>

					<div>
						<p className="max-w-[500px] font-sans font-medium text-lg leading-6">
							Tell your story your way ——— with different ways to write, style and brand your work.
						</p>

						<Button className="mt-6 bg-black text-white">Start writing</Button>
					</div>
				</div>

				<div className="h-full w-[50%] flex items-end">
					<Image src={phone1} alt="phone1"/>
					<Image src={phone2} alt="phone2" className="ml-[-30%]"/>
				</div>
			</div>

			<Separator />

			<div className="container mx-auto h-full 2xl:max-w-[1920px] flex p-0">
				<div className="w-[50%] border-l-2 border-black p-12">
					<h3 className="text-5xl">Start a blog.</h3>
					<p className="max-w-[500px] font-sans font-medium text-lg leading-6 mt-12">
						Create a blog for free to have a personalized home for your writing. Brand your space and share
						your writing with readers on any device.
					</p>
				</div>

				<div className="w-[50%] border-x-2 border-black p-12">
					<h3 className="text-5xl">Start a publication.</h3>
					<p className="max-w-[500px] font-sans font-medium text-lg leading-6 mt-12">
						Collaborate with others or publish under a brand name.
						Use our story submission system and expressive customization options
					</p>
				</div>
			</div>
		</div>
	)
}

export default CreateYourSpaceSection
