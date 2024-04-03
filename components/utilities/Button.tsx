import {cn} from '@/lib/utils'

const Button = ({ children, className, ...props }: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<button
			className={cn(
				'bg-white text-black px-4 lg:px-8 py-2 rounded-full font-sans font-semibold text-sm lg:text-lg 2xl:text-xl flex justify-center items-center',
				className
			)}
			{...props}>
			{children}
		</button>
	)
}

export default Button
