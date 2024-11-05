import { Button, ButtonProps } from '@shared/ui'
import classNames from 'classnames'

// Define the type for the PurpleButtonProps, including the outline prop
export interface PurpleButtonProps extends ButtonProps {
  innerClassName?: string
  outline?: boolean // Add the outline prop here
}

export const PurpleButton = (props: PurpleButtonProps) => {
  const { children, className, innerClassName, outline, ...rest } = props

  return (
    <Button
      color="purple"
      className={classNames(
        'border-none focus:outline-transparent',
        outline && 'border-2 border-purple-500', // Apply styles conditionally based on the outline prop
        className
      )}
      style={{
        backgroundColor: outline ? 'transparent' : '#FA48E8', // Set background color conditionally
        color: outline ? '#FA48E8' : '#FFFFFF', // Change text color for outline variant
      }}
      {...rest}
    >
      <span className={classNames(innerClassName)}>{children}</span>
    </Button>
  )
}
