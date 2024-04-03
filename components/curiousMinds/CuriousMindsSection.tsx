'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'

import Person, {Person as PersonType} from '@/components/curiousMinds/Person'
import TypingAnimation from '@/components/utilities/TypingAnimation'

const people: PersonType[] = [
	{
		name: 'Barack Obama',
		image: '/people/obama.jpg',
		description: 'Dad, husband, President, citizen',
	},
	{
		name: 'Michael Chabon',
		image: '/people/chabon.jpg',
		description: 'Novelist, screenwriter, and columnist',
	},
	{
		name: 'Camille Fournier',
		image: '/people/fournier.jpg',
		description: 'Engineer, CTO, and author',
	},
	{
		name: 'Carvell Wallace',
		image: '/people/wallace.jpg',
		description: 'New York Times bestselling author and podcaster',
	},
	{
		name: 'Devon Price',
		image: '/people/price.jpg',
		description: 'Social psychologist, and author',
	},
	{
		name: 'Susan Orlean',
		image: '/people/orlean.jpg',
		description: 'Writer for The New Yorker, author',
	}
]

const CuriousMindsSection = ({className}: {className?: string}) => {
	const [hoveredPerson, setHoveredPerson] = useState<PersonType| null>(null)

	const handleMouseEnter = (person: PersonType) => {
		setHoveredPerson(person)
	}

	const handleMouseLeave = () => {
		setHoveredPerson(null)
	}
	
	return (
		<div className={cn('bg-black', className)}>
			<div className="container mx-auto h-full items-start 2xl:max-w-[1920px] px-6 lg:px-12 py-12 flex flex-col lg:flex-row justify-between gap-14 lg:gap-0">
				<h2 className="lg:max-w-[500px] xl:max-w-[700px] text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-white">
					Join a network of curious minds
					<TypingAnimation text={hoveredPerson ? ` with ${hoveredPerson?.name!}` : ''} />
					{/*<div className="inline-block ml-2 h-8 lg:h-12 2xl:h-16 w-1 bg-white animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]"/>*/}
				</h2>

				<div className="w-full lg:w-[40%]">
					{people.map((person, index) => (
						<Person
							key={index}
							person={person}
							index={index}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className={index === 0 ? 'border-t-[1px] border-white' : ''}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CuriousMindsSection
