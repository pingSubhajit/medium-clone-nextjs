import {cn} from '@/lib/utils'

const UpArrow = ({className}: {className?: string}) => {
	return (
		<svg width="16" height="30" viewBox="0 0 16 30" xmlns="http://www.w3.org/2000/svg" fill="white" className={cn(className)}>
			<path d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 30L9 1H7L7 30H9Z" />
		</svg>
	)
}

export default UpArrow
