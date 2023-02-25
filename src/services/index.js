import { KEY, BASE_URL, DEFAULT_ERROR_MESSAGE } from './config'

const Movie = {
  find: async ({ query, currentPage }) => {
    const params = new URLSearchParams()

    params.set('apikey', KEY)
    params.set('page', currentPage)
    query && params.set('s', query)

    try {
      const response = await fetch(`${BASE_URL}?${params}`)
      return await response.json()
    } catch (error) {
      throw Error(DEFAULT_ERROR_MESSAGE)
    }
  },
}

export { Movie }
