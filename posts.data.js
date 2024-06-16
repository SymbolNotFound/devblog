import { createContentLoader } from 'vitepress'

export default createContentLoader('202{3..9}/{01..12}/*.md', {
  excerpt: true,
  transform(rawData) {
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => ({
      title: page.title,
      date: structuredDate(page.frontmatter.date),
      excerpt: page.excerpt || '',
    })).slice(0, 5)
  }
})

function structuredDate(dateString) {
  const date = new Date(dateString)
  date.setUTCHours(5)
  return {
    number: +date,
    string: date.toLocaleDateString('en-US' /* default locale */, {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
}