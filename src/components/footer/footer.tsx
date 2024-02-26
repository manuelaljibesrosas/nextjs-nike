'use client'

import { useState } from 'react'
import {
  companyMenu,
  helpMenu,
  promotionsMenu,
  resourcesMenu,
} from '@/utils/menus'
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from '@/components/Icons'
import Link from 'next/link'
import { nikeTG, helveticaNowTextMedium } from '@/assets/fonts'
import { Separator } from '@/components/ui/separator/Separator'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/Collapsible'
import clsx from 'clsx'
import styles from './footer.module.scss'

const FooterCollapsibleMenu: React.FC<{
  title: string
  menu: typeof promotionsMenu
}> = ({ title, menu }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <div
          className={clsx(
            styles['footer-link-header'],
            nikeTG.className,
            styles['collapsible-trigger']
          )}>
          <span>{title}</span>
          <svg
            viewBox="0 0 24 24"
            width={12}
            height={12}
            stroke="#fff"
            strokeWidth={3}>
            {!isOpen && <line x1="12" y1="0" x2="12" y2="24" />}
            <line x1="0" y1="12" x2="24" y2="12" />
          </svg>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className={styles['footer-menu-column']}>
          {menu.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={clsx(
                styles['footer-link'],
                helveticaNowTextMedium.className
              )}>
              {item.label}
            </Link>
          ))}
        </div>
        <Separator />
      </CollapsibleContent>
    </Collapsible>
  )
}

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles['footer-container']}>
      <div className={styles['footer-columns-wrapper']}>
        <div className={styles['footer-menu-column']}>
          <div
            className={clsx(styles['footer-link-resources'], nikeTG.className)}>
            Resources
          </div>
          {resourcesMenu.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={clsx(
                styles['footer-link-resources'],
                nikeTG.className
              )}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles['collapsible-menus-group']}>
          <Separator />
          <FooterCollapsibleMenu title="Help" menu={helpMenu} />
          <FooterCollapsibleMenu title="Company" menu={companyMenu} />
          <FooterCollapsibleMenu
            title="Promotions & Discounts"
            menu={promotionsMenu}
          />
        </div>
        {[
          ['Help', helpMenu],
          ['Company', companyMenu],
          ['Promotions & Discounts', promotionsMenu],
        ].map((menu) => {
          const [title, list] = menu as [string, typeof promotionsMenu]

          return (
            <div
              key={title}
              className={clsx(
                styles['footer-menu-column'],
                styles['hidden-xs']
              )}>
              <div
                className={clsx(
                  styles['footer-link-header'],
                  nikeTG.className
                )}>
                {title}
              </div>
              {list.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={clsx(
                    styles['footer-link'],
                    helveticaNowTextMedium.className
                  )}>
                  {item.label}
                </Link>
              ))}
            </div>
          )
        })}
      </div>
      <div className={styles['social-links-list']}>
        <a href="https://twitter.com/Nike" className={styles['social-link']}>
          <XIcon className={styles['social-link-icon']} />
        </a>
        <a
          href="https://www.facebook.com/nike"
          className={styles['social-link']}>
          <FacebookIcon className={styles['social-link-icon']} />
        </a>
        <a
          href="https://www.youtube.com/user/nike"
          className={styles['social-link']}>
          <YoutubeIcon className={styles['social-link-icon']} />
        </a>
        <a href="https://instagram.com/nike" className={styles['social-link']}>
          <InstagramIcon className={styles['social-link-icon']} />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
