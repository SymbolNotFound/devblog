import { createContentLoader } from 'vitepress'

interface Post {
  title: string,
  url: string,
  date: {
    datetime: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('202{3..9}/{01..12}/*.md', {
  excerpt: true,
  transform(rawData) {
    return rawData.sort((a, b) => {
      // convert dates to numbers and find their (ordered) distance,
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => ({ // then transform each page into equivalent Post struct
      title: page.frontmatter.title,
      url: page.url,
      date: dateStruct(page.frontmatter.date),
      excerpt: page.excerpt || '',
    })).slice(0, 5).reverse()
  }
})

function dateStruct(datestr: string, locale?: string) {
  const date = new Date(datestr)
  date.setUTCHours(7)
  locale ??= 'en-US'
  return {
    datetime: +date,
    string: date.toLocaleDateString(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
  }
}