import { KEY, BASE_URL, DEFAULT_ERROR_MESSAGE } from './config'

const Movie = {
  find: async ({ query, currentPage }) => {
    const search = query ? `&s=${query}` : ''
    const page = currentPage ? `&page=${currentPage}` : ''

    try {
      const response = await fetch(`${BASE_URL}/?apikey=${KEY}${search}${page}`)
      return await response.json()
    } catch (error) {
      throw Error(DEFAULT_ERROR_MESSAGE)
    }
  },
}

export { Movie }
