import { Button, ButtonProps } from '@shared/ui'
import classNames from 'classnames'

interface PurpleButtonProps extends ButtonProps {
  innerClassName?: string
}

export const PurpleButton = (props: PurpleButtonProps) => {
  const { children, className, innerClassName, ...rest } = props

  return (
    <Button
      color="purple"
      className={classNames(
        'border-none focus:outline-transparent',
        className
      )}
      style={{
        backgroundColor: '#FA48E8', // Set button background to the specified color
        color: '#FFFFFF', // Ensures the text is readable on the button
      }}
      {...rest}
    >
      <span className={classNames(innerClassName)}>{children}</span>
    </Button>
  )
}
