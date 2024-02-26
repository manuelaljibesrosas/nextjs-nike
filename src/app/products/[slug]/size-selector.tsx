'use client'

import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { helveticaNowText, helveticaNowTextMedium } from '@/assets/fonts'
import styles from './size-selector.module.scss'

function SizeSelector({ sizes }: { sizes: string[] }) {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0] || '')

  const handleSelectSize = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const size = e.currentTarget.getAttribute('data-value')!

      setSelectedSize(size)
    },
    []
  )

  return (
    <div className={styles.sizeSelector}>
      <div className={styles.sizeSelectorHeader}>
        <div className={clsx(helveticaNowTextMedium.className)}>
          Select Size
        </div>
        <div
          className={clsx(
            styles.sizeSelectorHeaderSizeGuide,
            helveticaNowTextMedium.className
          )}>
          Size Guide
        </div>
      </div>
      <div className={styles.sizeSelectorGrid}>
        {sizes.map((size) => (
          <div
            key={size}
            data-value={size}
            data-state={selectedSize === size ? 'selected' : 'unselected'}
            className={clsx(
              styles.sizeSelectorSize,
              helveticaNowText.className
            )}
            onClick={handleSelectSize}>
            {size}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SizeSelector
