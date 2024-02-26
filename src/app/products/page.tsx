import { products as _products } from '@/utils/seed-data'
import styles from './products.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import { helveticaNowText, helveticaNowTextMedium } from '@/assets/fonts'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mens Jordan Shoes',
  description: 'Find Mens Jordan Shoes at Nike.com. Free delivery and returns.',
}

export default async function ProductsPage() {
  const products = await new Promise<typeof _products>((resolve) =>
    setTimeout(() => resolve(_products), 120)
  )

  return (
    <div className={styles.productsListContainer}>
      <div className={styles.listingHeader}>
        <div
          className={clsx(
            styles.pageBreadcrumbs,
            helveticaNowTextMedium.className
          )}>
          Jordan / Shoes
        </div>
        <div
          className={clsx(
            styles.listingTitle,
            helveticaNowTextMedium.className
          )}>
          Mens Jordan Shoes
        </div>
      </div>
      <div className={styles.productsList}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <figure className={styles.productCard}>
              <Image
                src={product.image}
                alt=""
                width={592}
                height={592}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <div className={styles.productCardDetails}>
                <div>
                  <div
                    className={clsx(
                      styles.productCardTags,
                      helveticaNowTextMedium.className
                    )}>
                    {product.tags && product.tags.length > 0 && product.tags[0]}
                  </div>
                  <h3
                    className={clsx(
                      styles.productCardTitle,
                      helveticaNowTextMedium.className
                    )}>
                    {product.name}
                  </h3>
                  <div
                    className={clsx(
                      styles.productCardCategory,
                      helveticaNowText.className
                    )}>
                    {product.category}
                  </div>
                  <div
                    className={clsx(
                      styles.productCardColors,
                      helveticaNowText.className
                    )}>{`${product.colorVariants} ${product.colorVariants > 0 ? 'Colors' : 'Color'}`}</div>
                </div>
                <div
                  className={clsx(
                    styles.productCardPrice,
                    helveticaNowTextMedium.className
                  )}>{`$${product.price}`}</div>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  )
}
