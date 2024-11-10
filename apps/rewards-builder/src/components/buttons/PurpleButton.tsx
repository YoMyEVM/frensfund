import { Button, ButtonProps } from '@shared/ui'
import classNames from 'classnames'

export interface PurpleButtonProps extends Omit<ButtonProps, 'color'> {
  innerClassName?: string
}

export const PurpleButton = (props: PurpleButtonProps) => {
  const { children, className, innerClassName, ...rest } = props

  return (
    <Button
      color='purple'
      className={classNames(
        'bg-[#00FF00] border-[#00FF00] hover:bg-[#00CC00] focus:outline-transparent',
        className
      )}
      {...rest}
    >
      <span className={classNames('text-black whitespace-nowrap', innerClassName)}>
        {children}
      </span>
    </Button>
  )
}
