import clsx from 'clsx'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/dbpn2.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - dbp</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {`Hi, I'm Byron Pantoja.`} <br />
              {`I live in Davao City, where I work remotely, drink good coffee, and share my experiences and learnings with others.`}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {`For over a decade, I've worked across the coffee value chain to
                help promote Specialty Coffee in the Philippines with our family
                business, `}
                <a className="font-bold" href="https://coffeeforpeace.com">
                  Coffee for Peace
                </a>{' '}
                {`(CFP). In partnership with `}
                <a
                  className="font-bold"
                  href="https://peacebuilderscommunity.org"
                >
                  PeaceBuilders Community
                </a>{' '}
                {`(PBCI), CFP has worked on private and government-funded projects
                around the Philippines as management consultants or project
                managers. Our unique approach values people over profit and
                culture over brand. Our track record of training communities to
                be self-sustaining and self-motivated has won us recognition
                nationally and globally.`}
              </p>
              <p>
                {`In 2018, I became a husband and father and decided to take a break from CFP's day-to-day operations to pursue my interests in technology. For four years, I studied to become a web developer and made it onto an engineering team twice -- but I never managed to write a single blog about my experiences or code. Because of this lack of self-reflection, I concluded that I'm not a developer.`}
              </p>
              <p>
                {`Today, I'm focused on pursuing my love for technology through communication design, specifically how to optimize content and website structure to maximize search and online visibility for my career and family business. Designing SEO content that is human and machine-readable is an exciting challenge that involves business analysis, website architecture, and professional communication strategy. Putting everything together with intent and purpose has redefined my thinking of sales and marketing comms. 
`}
              </p>
              <p>
                {`My name is Byron Pantoja, and I'm a tech enthusiast, communication designer, and agile coffee drinker. Thank you for visiting my site and learning a little bit about me. `}
              </p>
              <p>{`I hope to get to know you as well.`}</p>
              <p>{`Cheers,`}</p>
              <span>dbp</span>
            </div>
          </div>
          <div className="lg:pl-20">
            <p className="mb-5 text-gray-500">{`If you'd like to get in touch, you can find me on: `}</p>
            <ul role="list">
              <SocialLink
                href="https://twitter.com/dbp_byron"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/dbp.833/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/byronPantoja"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/byronpantoja/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
