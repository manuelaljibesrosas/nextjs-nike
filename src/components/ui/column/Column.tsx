import clsx from 'clsx'
import styles from '@/styles/layout.module.scss'

const Column: React.FC<
  React.PropsWithChildren<
    Partial<{
      gap: number
      mainAxisAlignment:
        | 'space-between'
        | 'space-around'
        | 'start'
        | 'center'
        | 'end'
      crossAxisAlignment: 'start' | 'center' | 'end'
    }> &
      React.HTMLAttributes<HTMLDivElement>
  >
> = ({
  gap,
  mainAxisAlignment,
  crossAxisAlignment,
  children,
  style,
  className,
  ...props
}) => (
  <div
    style={{
      gap,
      ...style,
    }}
    className={clsx(
      styles.column,
      {
        [styles['justify-around']]: mainAxisAlignment === 'space-around',
        [styles['justify-between']]: mainAxisAlignment === 'space-between',
        [styles['justify-center']]: mainAxisAlignment === 'center',
        [styles['justify-start']]: mainAxisAlignment === 'start',
        [styles['justify-end']]: mainAxisAlignment === 'end',
        [styles['items-start']]: crossAxisAlignment === 'start',
        [styles['items-center']]: crossAxisAlignment === 'center',
        [styles['items-end']]: crossAxisAlignment === 'end',
      },
      className
    )}
    {...props}>
    {children}
  </div>
)

export default Column
