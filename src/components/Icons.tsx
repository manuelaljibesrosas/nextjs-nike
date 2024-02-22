import { SVGProps } from 'react'

// UI Icons

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      stroke="#111"
      stroke-width="1.5"
      d="M13.962 16.296a6.717 6.717 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
    />
  </svg>
)

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      stroke="#111"
      stroke-width="1.5"
      d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 1.607-8.084 4.923 4.923 0 0 1 1.897-.375c1.324 0 2.568.516 3.504 1.451L12 6.492l1.29-1.291a4.925 4.925 0 0 1 3.504-1.451Z"
    />
  </svg>
)

export const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      stroke="#111"
      stroke-width="1.5"
      d="M8.25 8.25V6a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 0 4.5H3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V8.25H17.5"
    />
  </svg>
)

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" {...props}>
    <path d="M12.48 0 9.44 8.96 0 9.28l7.6 5.6L4.96 24l7.68-5.44 7.84 5.28-2.8-9.04 7.52-5.76-9.52-.08L12.48 0Z" />
  </svg>
)

// Social Icons

export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-x"
    viewBox="0 0 24 22"
    {...props}>
    <path d="M18.901.153h3.68l-8.04 9.19L24 21.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 .154h7.594l5.243 6.932L18.901.153ZM17.61 19.644h2.039L6.486 2.24H4.298L17.61 19.644Z" />
  </svg>
)

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-facebook"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
  </svg>
)

export const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
    {...props}>
    <path d="m8 10 5.19-3L8 4v6Zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L20 7c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L10 14c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L0 7c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73C2.64.31 3.5.22 4.82.16c1.3-.07 2.49-.1 3.59-.1L10 0c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
  </svg>
)

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
    <path d="M5.8 0h8.4C17.4 0 20 2.6 20 5.8v8.4a5.8 5.8 0 0 1-5.8 5.8H5.8C2.6 20 0 17.4 0 14.2V5.8A5.8 5.8 0 0 1 5.8 0Zm-.2 2A3.6 3.6 0 0 0 2 5.6v8.8C2 16.39 3.61 18 5.6 18h8.8a3.6 3.6 0 0 0 3.6-3.6V5.6C18 3.61 16.39 2 14.4 2H5.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM10 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
)
