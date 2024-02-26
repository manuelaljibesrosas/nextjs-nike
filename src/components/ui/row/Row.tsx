import clsx from 'clsx'
import styles from '@/styles/layout.module.scss'
import { Slot } from '@radix-ui/react-slot'

const Row: React.FC<
  React.PropsWithChildren<
    Partial<{
      asChild: boolean
      gap: number
      mainAxisAlignment:
        | 'space-between'
        | 'space-around'
        | 'start'
        | 'center'
        | 'end'
      crossAxisAlignment: 'start' | 'center' | 'end'
    }> &
      React.HTMLAttributes<HTMLElement>
  >
> = ({
  asChild,
  gap,
  mainAxisAlignment,
  crossAxisAlignment,
  children,
  style,
  className,
  ...props
}) => {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      style={{
        gap,
        ...style,
      }}
      className={clsx(className, styles.row, {
        [styles['justify-around']]: mainAxisAlignment === 'space-around',
        [styles['justify-between']]: mainAxisAlignment === 'space-between',
        [styles['justify-center']]: mainAxisAlignment === 'center',
        [styles['justify-start']]: mainAxisAlignment === 'start',
        [styles['justify-end']]: mainAxisAlignment === 'end',
        [styles['items-start']]: crossAxisAlignment === 'start',
        [styles['items-center']]: crossAxisAlignment === 'center',
        [styles['items-end']]: crossAxisAlignment === 'end',
      })}
      {...props}>
      {children}
    </Comp>
  )
}

export default Row
