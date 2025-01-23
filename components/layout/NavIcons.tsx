import Image from 'next/image';
import Link from 'next/link';

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Link
        href="https://github.com/LisandroFilloy"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="Link to Lisandro's gitHub profile"
          width={25}
          height={25}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          Github
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/lisandro-filloy/"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          alt="Link to Lisandro's linkedin profile"
          width={28}
          height={28}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          LinkedIn
        </span>
      </Link>
    </div>
  );
};
export default NavIcons;
