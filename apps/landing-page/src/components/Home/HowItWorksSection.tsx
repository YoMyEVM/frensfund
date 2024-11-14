import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface HowItWorksSectionProps {
  className?: string;
}

export const HowItWorksSection = (props: HowItWorksSectionProps) => {
  const { className } = props;

  return (
    <section
      className={classNames(
        'w-full flex flex-col gap-6 items-center md:gap-12 mb-20', // Add margin below
        className
      )}
    >
      <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center">
        <HowItWorksItem
          imgSrc="/Deploy.svg"
          title="Deploy a Vault & Fund Anything"
          link="https://getfunded.myevm.fun/"
        />
        <HowItWorksItem
          imgSrc="/Fund.svg"
          title="Earn & Win by Funding Projects"
          link="https://app.myevm.fun/"
        />
        <HowItWorksItem
          imgSrc="/Hack.svg"
          title="Host a Hackathon w/o Spending"
          link="https://myevm.fun/biz"
        />
        <HowItWorksItem
          imgSrc="/Market.svg"
          title="No Spend Captive Marketing"
          link="https://myevm.fun/biz"
        />
      </div>
    </section>
  );
};

interface HowItWorksItemProps {
  imgSrc: string;
  title: string;
  link: string;
  className?: string;
}

const HowItWorksItem = (props: HowItWorksItemProps) => {
  const { imgSrc, title, link, className } = props;

  return (
    <Link
      href={link}
      className={classNames('flex flex-col gap-3 md:gap-6 group', className)}
      style={{ width: '230px' }}
    >
      <div className="relative">
        <Image
          src={imgSrc}
          alt={title}
          width={230}
          height={200}
          className="drop-shadow-lg group-hover:brightness-110"
        />
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-3xl font-medium group-hover:text-pt-purple-100 transition-colors duration-300">
          {title}
        </span>
      </div>
    </Link>
  );
};