import {cn} from '@/lib/utils'

const Separator = ({className}: {className?: string}) => {
	return (
		<div className={cn('h-0.5 w-full bg-black', className)}/>
	)
}

export default Separator
