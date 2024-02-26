import styles from './product-detail.module.scss'
import text from '@/styles/text.module.scss'
import { Product, mainProduct } from '@/utils/seed-data'
import {
  helveticaNeue,
  helveticaNowDisplayMedium,
  helveticaNowText,
  helveticaNowTextMedium,
} from '@/assets/fonts'
import clsx from 'clsx'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible/Collapsible'
import { Separator } from '@/components/ui/separator/Separator'
import SizeSelector from './size-selector'
import Column from '@/components/ui/column/Column'
import Row from '@/components/ui/row/Row'
import { Metadata } from 'next'
import ProductImageCarousel from './product-image-carousel'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = await new Promise<Product>((resolve) =>
    setTimeout(() => resolve(mainProduct), 250)
  )

  return {
    title: `${product.name} ${product.category}`,
    openGraph: {
      images: [product.image],
    },
  }
}

function ProductDetailsHeader(product: Product) {
  return (
    <Column gap={16} className={styles.productDetailHeader}>
      <Column>
        <h1
          className={clsx(
            styles.productDetailName,
            helveticaNowDisplayMedium.className
          )}>
          {product.name}
        </h1>
        <h3
          className={clsx(
            styles.productDetailCategory,
            helveticaNowTextMedium.className
          )}>
          {product.category}
        </h3>
      </Column>
      <div
        className={clsx(
          helveticaNowTextMedium.className
        )}>{`$${product.price}`}</div>
    </Column>
  )
}

export default async function ProductDetailPage() {
  const product = await new Promise<Product>((resolve) =>
    setTimeout(() => resolve(mainProduct), 120)
  )

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailContent}>
        <ProductDetailsHeader {...product} />
        <ProductImageCarousel image={product.image} />
        <Column gap={36} className={styles.productDetailData}>
          <Column gap={60}>
            <ProductDetailsHeader {...product} />
            <SizeSelector sizes={product.availableSizes!} />
          </Column>
          <Column gap={12}>
            <button
              className={clsx(
                styles.buttonCta,
                helveticaNowTextMedium.className
              )}>
              Add to Bag
            </button>
            <button
              className={clsx(
                styles.buttonCta,
                styles.outlined,
                helveticaNowTextMedium.className
              )}>
              Favorite
            </button>
          </Column>
          <p
            className={clsx(
              styles.promotionsAndDiscounts,
              text['text-base'],
              text['leading-7'],
              helveticaNowText.className
            )}>
            This product is excluded from site promotions and discounts.
          </p>
          <Column>
            <h3
              className={clsx(
                text['text-base'],
                text['font-medium'],
                helveticaNowTextMedium.className
              )}>
              Shipping
            </h3>
            <div
              className={clsx(text['text-base'], helveticaNowText.className)}>
              You&apos;ll see our shipping options at checkout
            </div>
          </Column>
          <Column>
            <Row
              mainAxisAlignment="start"
              crossAxisAlignment="center"
              className={clsx(
                text['text-base'],
                text['leading-7'],
                helveticaNowText.className
              )}
              style={{
                height: 32,
              }}>
              Pickup today in 2 hours
            </Row>
            <Row
              mainAxisAlignment="start"
              crossAxisAlignment="center"
              className={helveticaNeue.className}
              style={{
                height: 32,
                alignSelf: 'start',
                borderBottom: '1px solid #111',
              }}>
              Search Stores
            </Row>
          </Column>
          <p
            className={clsx(
              text['text-base'],
              text['leading-7'],
              helveticaNowText.className
            )}>
            {product.description}
          </p>
          <Collapsible className={styles.shippingNotice}>
            <Separator className={styles.shippingNoticeSeparator} />
            <CollapsibleTrigger asChild>
              <Row
                mainAxisAlignment="space-between"
                crossAxisAlignment="center"
                style={{
                  cursor: 'pointer',
                  height: 80,
                }}>
                <div
                  className={clsx(
                    text['text-xl'],
                    helveticaNowDisplayMedium.className
                  )}>
                  Shipping & Returns
                </div>
                <CollapsibleTrigger asChild>
                  <svg
                    viewBox="0 0 24 24"
                    className={styles.shippingNoticeCollapsibleIcon}>
                    <line x1={0} x2={24} y1={0} y2={0} />
                    <line x1={24} x2={24} y1={0} y2={24} />
                  </svg>
                </CollapsibleTrigger>
              </Row>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <Column gap={32} style={{ paddingBottom: 32 }}>
                <p
                  className={clsx(
                    text['text-base'],
                    text['leading-7'],
                    helveticaNowText.className
                  )}>
                  Free standard shipping on orders $50+ and free 60-day returns
                  for Nike Members.{' '}
                  <a href="#" className={helveticaNowTextMedium.className}>
                    Learn more
                  </a>
                  .{' '}
                  <a href="#" className={helveticaNowTextMedium.className}>
                    Return policy exclusions apply
                  </a>
                  .
                </p>
                <div className={helveticaNowTextMedium.className}>
                  <a href="#" className={helveticaNowTextMedium.className}>
                    Pick-up available at select Nike Stores.
                  </a>
                </div>
              </Column>
            </CollapsibleContent>
            <Separator className={styles.shippingNoticeSeparator} />
          </Collapsible>
        </Column>
      </div>
    </div>
  )
}
