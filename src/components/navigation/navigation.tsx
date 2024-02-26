import Link from 'next/link'
import styles from './navigation.module.scss'
import { primaryMenu } from '@/utils/menus'
import {
  SearchIcon,
  HeartIcon,
  CartIcon,
  UserIcon,
  MenuIcon,
  ChevronRight,
  Close,
  OrdersIcon,
  StoreIcon,
  HelpIcon,
} from '@/components/Icons'
import { Logo } from '@/components/Logo'
import clsx from 'clsx'
import {
  helveticaNowDisplayMedium,
  helveticaNowTextMedium,
} from '@/assets/fonts'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer/Drawer'

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles['logo-container']}>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
      </div>
      <div className={styles['menu-list']}>
        {primaryMenu.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            className={`${styles['menu-list-item']} ${helveticaNowTextMedium.className}`}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles['actions-list']}>
        <div className={styles['search-input']}>
          <div className={styles['search-input-confirm']}>
            <SearchIcon className={styles['search-input-icon']} />
          </div>
          <input
            type="text"
            className={`${styles['search-input-field']} ${helveticaNowTextMedium.className}`}
            placeholder="Search"
          />
        </div>
        <div className={styles['favorites-bag-container']}>
          <Link
            href="/"
            className={clsx(styles['navigation-action-button'], 'hidden-sm')}>
            <HeartIcon className={styles['favorites-bag']} />
          </Link>
          <Link href="/" className={styles['navigation-action-button']}>
            <CartIcon className={styles['favorites-bag']} />
          </Link>
          <Link
            href="/"
            className={clsx(styles['navigation-action-button'], 'hidden-lg')}>
            <UserIcon className={styles['favorites-bag']} />
          </Link>
          <Drawer direction="right">
            <DrawerTrigger className={clsx(styles['navigation-action-button'], styles.mobileMenu)}>
              <MenuIcon className={styles['favorites-bag']} />
            </DrawerTrigger>
            <DrawerContent className={styles['mobile-drawer-content']}>
              <DrawerClose
                className={clsx(
                  styles['mobile-drawer-close-drawer'],
                  styles['navigation-action-button']
                )}>
                <Close className={styles['favorites-bag']} />
              </DrawerClose>
              <div className={styles['mobile-drawer-main-menu']}>
                {primaryMenu.map((item) => (
                  <Link
                    href={item.path}
                    key={item.label}
                    className={clsx(
                      styles['mobile-drawer-main-menu-item'],
                      helveticaNowDisplayMedium.className
                    )}>
                    <span>{item.label}</span>
                    <ChevronRight width={24} height={24} />
                  </Link>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '50px',
                }}>
                <div className={styles['mobile-drawer-auth-headline-group']}>
                  <div
                    className={clsx(
                      styles['mobile-drawer-headline'],
                      helveticaNowDisplayMedium.className
                    )}>
                    Become a Nike Member for the best products, inspiration and
                    stories in sport.{' '}
                    <Link
                      href="/"
                      style={{
                        color: 'var(--color-text)',
                      }}>
                      Learn more
                    </Link>
                  </div>
                  <div className={styles['mobile-drawer-auth-group']}>
                    <button
                      className={clsx(
                        styles.button,
                        helveticaNowTextMedium.className
                      )}>
                      Join Us
                    </button>
                    <button
                      className={clsx(
                        styles.button,
                        styles.outline,
                        helveticaNowTextMedium.className
                      )}>
                      Sign In
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '44px',
                      gap: '18px',
                    }}>
                    <CartIcon width={24} height={24} />
                    <div
                      style={{ fontSize: '1rem' }}
                      className={helveticaNowTextMedium.className}>
                      Bag
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '44px',
                      gap: '18px',
                    }}>
                    <OrdersIcon width={24} height={24} />
                    <div
                      style={{ fontSize: '1rem' }}
                      className={helveticaNowTextMedium.className}>
                      Orders
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '44px',
                      gap: '18px',
                    }}>
                    <StoreIcon width={24} height={24} />
                    <div
                      style={{ fontSize: '1rem' }}
                      className={helveticaNowTextMedium.className}>
                      Find a Store
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '44px',
                      gap: '18px',
                    }}>
                    <HelpIcon width={24} height={24} />
                    <div
                      style={{ fontSize: '1rem' }}
                      className={helveticaNowTextMedium.className}>
                      Help
                    </div>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
