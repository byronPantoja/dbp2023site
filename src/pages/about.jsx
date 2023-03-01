import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
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
          content="Hi, I'm Byron Pantoja. I spend my days coding and sipping on coffee, and
        I love nothing more than helping small businesses thrive with great
        design and tech."
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
              {`Hi, I'm Byron Pantoja. I spend my days coding and sipping on coffee, and
        I love nothing more than helping small businesses thrive with great
        design and tech.`}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {`I've always been a versatile person, having experience in various fields throughout my life. One of my greatest strengths is my ability to think creatively when solving problems. I don't just rely on the obvious solutions, but instead, I look beyond them to find innovative and effective ways to tackle any challenge.`}
              </p>

              <p>
                {`My communication skills have always been top-notch, which helps me articulate my ideas clearly and concisely. But I don't just work for myself; I love collaborating with others to achieve common goals. I enjoy sharing my knowledge and expertise with others while also learning from them.`}
              </p>

              <p>
                {`I'm someone who can adapt to any environment or situation quickly. Even in fast-paced environments, I thrive, and I'm always looking for ways to improve and learn. Details matter to me, and I always make sure my work is accurate and precise.`}
              </p>

              <p>
                {`Being organized and efficient is a big part of who I am. I can manage multiple tasks and projects simultaneously, ensuring that everything is done on time and to the best of my ability. As a self-motivated individual, I take the initiative to get things done without needing someone to tell me what to do.`}
              </p>

              <p>
                {`My critical thinking skills help me evaluate information to make informed decisions, ensuring that I choose the best option. Lastly, I'm always looking to expand my knowledge and skill set. I believe that learning is a never-ending process, and I'm committed to being a lifelong learner.`}
              </p>
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
