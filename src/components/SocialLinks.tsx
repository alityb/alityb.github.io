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

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <SocialLink 
        href="https://github.com/alityb"
        src="/images/github.png"
        alt="GitHub Profile"
      />
      <SocialLink 
        href="https://www.linkedin.com/in/ali-tayeb-a74aa327b/"
        src="/images/linkedin.png"
        alt="LinkedIn Profile"
      />
    </div>
  );
}