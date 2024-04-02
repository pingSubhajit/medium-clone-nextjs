import {cn} from "@/lib/utils";
import Image from "next/image";

export type Person = {
	name: string;
	image: string;
	description: string;
}

const Person = (
	{person, index, onMouseEnter, onMouseLeave, className}:
	{person: Person, index: number, onMouseEnter: (person: Person) => void, onMouseLeave: () => void, className?: string}
) => {
	return (
		<div
			key={index}
			className={cn(
				'py-4 w-full border-b-[1px] border-white cursor-pointer flex items-center gap-6',
				className
			)}
			onMouseEnter={() => onMouseEnter(person)}
			onMouseLeave={onMouseLeave}
		>
			<div className="w-16 aspect-square overflow-hidden relative rounded-full">
				<Image src={person.image} alt={person.name} fill/>
			</div>

			<div>
				<h3 className="font-sans text-white text-3xl">{person.name}</h3>
				<p className="mt-1 text-white uppercase font-sans">{person.description}</p>
			</div>
		</div>
	)
}

export default Person
