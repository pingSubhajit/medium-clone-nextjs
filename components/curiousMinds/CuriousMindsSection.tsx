'use client'

import {cn} from '@/lib/utils'
import {useState} from 'react'

import Person, {Person as PersonType} from '@/components/curiousMinds/Person'

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
			<div className="container mx-auto h-full items-start 2xl:max-w-[1920px] px-12 py-12 flex justify-between">
				<h2 className="max-w-[700px] text-8xl text-white">
					Join a network of curious minds
					{hoveredPerson && ` with ${hoveredPerson.name}`}
					<div className="inline-block ml-2 h-16 w-1 bg-white animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
				</h2>

				<div className="w-[40%]">
					{people.map((person, index) => (
						<Person
							key={index}
							person={person}
							index={index}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className={index === people.length - 1 ? '' : 'border-b-[1px] border-white'}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CuriousMindsSection
