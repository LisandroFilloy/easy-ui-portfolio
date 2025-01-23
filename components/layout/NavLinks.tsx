import Link from 'next/link';
import { useRouter } from "next/navigation";

const NavLinks = () => {
  const router = useRouter();

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = "ProjectsId";
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#ProjectsId");
    }
  };

  return (
    <nav className="mt-16 flex flex-col gap-8 font-Silkscreen text-3xl md:mt-0 md:flex-row md:text-sm">
      <a
        href="/#ProjectsId"
        className="py-4 md:py-0 md:hover:opacity-70"
        onClick={scrollToProjects}
      >
        Projects
      </a>
    </nav>
  );
};

export default NavLinks;