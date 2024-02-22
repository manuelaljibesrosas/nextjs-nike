interface Product {
  /** Unique id */
  id: number
  /** Product name */
  name: string
  /** Product category */
  category: string
  /** Total number of color variants*/
  colorVariants: number
  /** Unique slug for detail page */
  slug: string
  /** Path to product image (public directory) */
  image: string
  /** Product price in USD */
  price: number
  /** Array of product tags */
  tags?: string[]
  /** Array of available sizes */
  availableSizes?: string[]
  /** Product description */
  description?: string
}

/** All possible sizes for product detail page */
export const allSizes = [
  'M 7 / W 8.5',
  'M 7.5 / W 9',
  'M 8 / W 9.5',
  'M 8.5 / W 10',
  'M 9 / W 10.5',
  'M 9.5 / W 11',
  'M 10 / W 11.5',
  'M 10.5 / W 12',
  'M 11 / W 12.5',
  'M 11.5 / W 13',
  'M 12 / W 13.5',
  'M 12.5 / W 14',
  'M 13 / W 14.5',
  'M 14 / W 15.5',
  'M 15 / W 16.5',
  'M 16 / W 17.5',
  'M 17 / W 18.5',
  'M 18 / W 19.5',
]

/**
 * Main product for the product detail page
 * @note all grid items will route to this product slug
 */
export const mainProduct: Product = {
  id: 4,
  name: 'Air Jordan 3 Retro Craft "Ivory"',
  category: "Men's Shoes",
  tags: ['Best Seller'],
  colorVariants: 1,
  price: 210,
  slug: 'air-jordan-3-retro-craft-ivory',
  image: '/aj3-ivory.png',
  description:
    'Clean and supreme, the AJ3 returns. Pairing a smooth Ivory base with Grey Mist suede overlays and translucent accents on the heel tab and sole, this crafted edition ups the texture. It has dual branding on the heel and double Jumpman logos on the tongue—because twice the Jumpman is twice as nice.',
  availableSizes: [
    'M 7.5 / W 9',
    'M 8 / W 9.5',
    'M 8.5 / W 10',
    'M 9 / W 10.5',
    'M 9.5 / W 11',
    'M 10 / W 11.5',
    'M 10.5 / W 12',
    'M 11 / W 12.5',
    'M 11.5 / W 13',
    'M 12 / W 13.5',
    'M 13 / W 14.5',
    'M 14 / W 15.5',
  ],
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Tatum 2',
    category: 'Basketball Shoes',
    colorVariants: 1,
    price: 125,
    tags: ['Just In'],
    image: '/tatum-2.webp',
    slug: 'air-jordan-3-retro-craft-ivory',
  },
  {
    id: 2,
    name: 'Air Jordan 1 Retro High OG',
    category: 'Men’s Shoes',
    colorVariants: 1,
    price: 180,
    tags: ['Coming Soon'],
    image: 'aj1-high.png',
    slug: 'air-jordan-3-retro-craft-ivory',
  },
  {
    id: 3,
    name: 'Air Jordan 13 Retro "Blue Grey"',
    category: "Men's Shoes",
    colorVariants: 1,
    price: 200,
    tags: ['Just In'],
    image: '/aj13-retro.png',
    slug: 'air-jordan-3-retro-craft-ivory',
  },
  mainProduct,
  {
    id: 5,
    name: 'Air Jordan 1 Mid',
    category: 'Men’s Shoes',
    colorVariants: 8,
    price: 125,
    image: '/aj1-mid.png',
    slug: 'air-jordan-3-retro-craft-ivory',
  },
  {
    id: 6,
    name: 'Air Jordan 1 Zoom CMFT 2',
    category: "Men's Shoes",
    colorVariants: 4,
    price: 150,
    image: '/aj1-zoom.png',
    slug: 'air-jordan-3-retro-craft-ivory',
  },
]
