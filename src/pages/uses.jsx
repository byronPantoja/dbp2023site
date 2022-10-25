import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - dbp</title>
        <meta
          name="description"
          content="What I use on daily basis to get things done."
        />
      </Head>
      <SimpleLayout
        title="What I use on daily basis to get things done."
        intro="Working remotely for the past 5 years, I've had the opportunity to try out a lot of different tools and workflows. Here's a list of the ones I use on a daily basis."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro | 2GHz Quad-Core Intel Core i5, 16GB RAM (2020)">
              I use this machine for everything. I love the portability and I
              never had one fail me yet. Been using a 13in MBP since 2010.
            </Tool>
            <Tool title="HP 27xq | 27-inch QHD 1440p 144Hz">
              A 27in display is pretty standard. Having multiple windows and
              apps open on one display simultaneously makes managing
              communications and projects much easier.
            </Tool>
            <Tool title="Logitech G913 TKL | LIGHTSPEED Wireless Keyboard">
              The low profile keys and the wireless connection are a must for
              me. A great keyboard to keep at home or even take with you on the
              go.
            </Tool>
            <Tool title="Logitech G501 | LIGHTSPEED Wireless Mouse">
              Adjustable weight, wireless, and a comfortable shape. What more
              could you want? Customizale buttons to streamline my workflow. I
              love this mouse.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS CODE">
              My heart is really split, I love Jetbrains products just as much
              as I love VS Code. But I use VS Code for most of my projects
              because of the extensions and customizations I have made.
            </Tool>
            <Tool title="iTerm2 | Oh My Zsh | PowerLvl 10k">
              I use iTerm2 for all my terminal needs. I love the customizability
              and the ability to have multiple tabs open. I use Oh My Zsh for
              the theme and PowerLvl 10k for the prompt.
            </Tool>
            <Tool title="Local | By Flywheel">
              I use Local by Flywheel for all my local WP development needs.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Adobe Creative Cloud">
              Everything I need to get my designs done. I use Photoshop and
              Illustrator primarily. And I only begun to use XD for prototyping.
              I use to use Premiere for video editing, but have not used it in a
              while.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Obisidian">
              Great software to use for note taking. I use it for all my notes
              and to keep track of my projects. It even has database plugin and
              query langauge to help you organize your notes and find
              connection. Plus syncing with devices is free with a iCloud
              account!
            </Tool>
            <Tool title="Grammarly | Premium">
              I make so many small misakes when typing. Grammarly helps me avoid
              typos, misspellings, and other writing mistakes I make because of
              my dyslexia. I use the premium version because I found it to be
              worth the money.
            </Tool>
            <Tool title="MoneyWiz">
              I have gone through a lot of money management apps with my wife.
              This is the first app that makes sense for the Philippines, allows
              us to both make entries using only one account. And allows us to
              keep track of all of our finances -- credit, loan, business,
              personal, savings, budget -- all in one place. The best part
              though is there was practically no set up. We just started using
              it and it was easy to use.
            </Tool>
            <Tool title="1Password | 8">
              I use 1Password for all my passwords. I made the switch from
              LastPass to 1Password becuase of asthetics. I love the design and
              functionality, and would recommend it to anyone.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
