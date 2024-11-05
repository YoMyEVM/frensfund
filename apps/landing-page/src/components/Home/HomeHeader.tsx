import classNames from 'classnames';
import FlippingText from './FlippingText'; // Ensure this import path is correct based on your directory structure

interface HomeHeaderProps {
  className?: string;
}

export const HomeHeader = (props: HomeHeaderProps) => {
  const { className } = props;

  return (
    <div className={classNames('w-full isolate', className)}>
      <div className="w-full flex flex-col items-center">
        {/* Add FlippingText component here, above the header */}
        <FlippingText />
      </div>
    </div>
  );
};