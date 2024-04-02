import {cn} from '@/lib/utils'
import Separator from '@/components/utilities/Separator'
import audienceInsightImage from '@/public/audience_insight_image.png'
import Image from 'next/image'

const FeaturesSection = ({className}: {className?: string}) => {
	return (
		<div className={cn('bg-white', className)}>
			<div className="container mx-auto h-full 2xl:max-w-[1920px] p-12 flex flex-col items-center">
				<h2 className="max-w-[900px] text-8xl text-center leading-tight">Find and grow your audience.</h2>
				<p className="mt-4 font-sans font-medium text-lg leading-6">
						With simple tools and features, you have the chance to connect with over 100 million curious readers.
				</p>
			</div>

			<Separator />

			<div className="container mx-auto h-full 2xl:max-w-[1920px] grid grid-cols-9 grid-rows-2 border-x-2 border-black">
				<div className="col-span-3 row-span-2 p-11 pb-0 border-r-2 border-black flex flex-col justify-between">
					<div>
						<h3 className="text-5xl leading-tight">Audience insights.</h3>
						<p className="mt-12 font-sans font-medium text-lg leading-6 max-w-[400px]">
							Use data to learn what resonates with your readers so you can keep growing your audience
						</p>
					</div>

					<Image src={audienceInsightImage} alt="audienceInsightImage" />
				</div>

				<div className="col-span-3 p-11 border-r-2 border-b-2 border-black flex flex-col justify-between">
					<h3 className="text-5xl leading-tight">Social connectivity.</h3>
					<p className="font-sans font-medium text-lg leading-6 max-w-[400px]">
						Find people you are already connected with on Twitter and easily share your stories across
						platforms.
					</p>
				</div>

				<div className="col-span-3 p-11 border-b-2 border-black flex flex-col justify-between">
					<h3 className="text-5xl leading-tight">Powerful network.</h3>
					<p className="font-sans font-medium text-lg leading-6 max-w-[400px]">
						Readers can discover and follow you easily with tailored feeds and recommendations.
					</p>
				</div>

				<div className="col-span-2 p-11 border-r-2 border-black flex flex-col justify-between">
					<h3 className="text-5xl leading-tight">Email subscriptions.</h3>
					<p className="font-sans font-medium text-lg leading-6 max-w-[400px]">
						Reach your readers by having your stories delivered directly to their inboxes.
					</p>
				</div>

				<div className="col-span-2 p-11 border-r-2 border-black flex flex-col justify-between">
					<h3 className="text-5xl leading-tight">Interactive discussions.</h3>
					<p className="font-sans font-medium text-lg leading-6 mt-16 max-w-[400px]">
						Build relationships with your readers through a threaded comments section.
					</p>
				</div>

				<div className="col-span-2 p-11">
					<h3 className="text-5xl flex flex-col justify-between leading-tight">Custom design.</h3>
					<p className="font-sans font-medium text-lg leading-6 mt-16 max-w-[400px]">
						Easily customize your page to stand out and build your brand.
					</p>
				</div>
			</div>
		</div>
	)
}

export default FeaturesSection
