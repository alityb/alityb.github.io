import Link from 'next/link'
import SocialLinks from '../components/SocialLinks'

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, children, isExternal = false }) => {
  if (isExternal) {
    return (
      <a href={href} className="bg-accent-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded w-full text-center transition-colors duration-300" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className="bg-accent-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded w-full text-center transition-colors duration-300">
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-color flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-primary-color">Hello, I&apos;m Ali</h1>
      <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
        <Button href="/about">About Me</Button>
        <Button href="/projects">Projects</Button>
        <Button href="/Ali_Tayeb_CV.pdf" isExternal>View CV</Button>
      </div>
      <SocialLinks />
    </div>
  )
}
