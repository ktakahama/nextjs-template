export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  noimg_png: '/noimg.png',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
