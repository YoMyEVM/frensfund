import { useScreenSize } from '@shared/generic-react-hooks'
import { Button } from '@shared/ui'
import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import Image from 'next/image'

interface ToolsHeaderProps {
  className?: string
}

export const ToolsHeader = (props: ToolsHeaderProps) => {
  const { className } = props

  const { isMobile } = useScreenSize()

  return (
    <div className={classNames('w-full', className)}>
      <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col items-center mt-4 mb-8 px-4 text-center md:mt-8 md:mb-10'>
          <h2 className='text-3xl font-medium md:text-5xl'>Home of No Spend and Maximum Reach Business Solutions</h2>
        </div>
        <div className='flex flex-col gap-4 items-center md:flex-row'>
          <Button
            href="/"
            color='purple'
            size={isMobile ? 'md' : 'lg'}
            fullSized={isMobile}
          >
            Watch Tutorials
          </Button>
          <Button
            href="/"
            color='purple'
            size={isMobile ? 'md' : 'lg'}
            fullSized={isMobile}
            outline={true}
          >
            Read the Docs
          </Button>
        </div>
      </div>
    </div>
  )
}