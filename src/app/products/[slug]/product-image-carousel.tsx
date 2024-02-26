import Image from 'next/image'
import Row from '@/components/ui/row/Row'
import styles from './product-image-carousel.module.scss'
import text from '@/styles/text.module.scss'
import { StarIcon } from '@/components/Icons'
import clsx from 'clsx'
import { helveticaNowText } from '@/assets/fonts'

function ProductImageCarousel({ image }: { image: string }) {
  return (
    <div className={styles.productDetailImageCanvas}>
      <Row
        crossAxisAlignment="center"
        gap={4}
        className={styles.productDetailImageBadge}>
        <StarIcon width={16} height={16} />
        <div className={clsx(helveticaNowText.className, text['text-sm'])}>
          Highly Rated
        </div>
      </Row>
      <Image
        src={image}
        width={592}
        height={592}
        alt=""
        className={styles.productDetailImage}
      />
    </div>
  )
}

export default ProductImageCarousel
