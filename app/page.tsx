import HeroSection from '@/components/hero/HeroSection'
import CuriousMindsSection from '@/components/curiousMinds/CuriousMindsSection'
import CreateYourSpaceSection from '@/components/CreateYourSpaceSection'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'
import FaqSection from '@/components/FaqSection'

export default function Home() {
	return (
		<main>
			<section>
				<HeroSection />
			</section>

			<section>
				<CuriousMindsSection />
			</section>
			
			<section>
				<CreateYourSpaceSection />
			</section>
			
			<section>
				<FeaturesSection />
			</section>
			
			<section>
				<CTASection />
			</section>

			<section>
				<FaqSection />
			</section>
		</main>
	)
}
