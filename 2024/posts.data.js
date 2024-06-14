import { createContentLoader } from 'vitepress'

export default createContentLoader('**/*.md', {
  excerpt: true,
  transform(rawData) {
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => ({
      title: page.title,
      date: structuredDate(page.frontmatter.date),
      excerpt: page.excerpt || '',
    }))
  }
})

function structuredDate(dateString) {
  const date = new Date(dateString)
  date.setUTCHours(5)
  return {
    number: +date,
    string: date.toLocaleDateString(undefined /* default locale */, {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
}