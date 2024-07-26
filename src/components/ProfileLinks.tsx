import Image from 'next/image';
import Link from 'next/link';

interface SocialLinkProps {
    href: string;
    src: string;
    alt: string;
}
  
const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" 
        className="inline-block p-2 rounded-full bg-accent-color hover:bg-primary-color transition-colors duration-300">
        <Image src={src} alt={alt} width={30} height={30} className="filter invert" />
    </Link>
);

const CVButton: React.FC = () => (
    <Link href="/api/download-cv" target="_blank" rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded bg-accent-color hover:bg-primary-color text-white transition-colors duration-300">
        View CV
    </Link>
);

export default function ProfileLinks() {
  return (
    <div className="flex justify-center items-center space-x-4 my-4">
      <SocialLink
        href="https://www.worldcubeassociation.org/persons/2024TAYE01"
        src="/images/WCA.png"
        alt="WCA Profile"
      />
      <SocialLink 
        href="https://www.linkedin.com/in/ali-tayeb-a74aa327b/"
        src="/images/linkedin.png"
        alt="LinkedIn Profile"
      />
      <SocialLink 
        href="https://github.com/alityb"
        src="/images/github.png"
        alt="GitHub Profile"
      />
      <CVButton />
    </div>
  );
}