import React from 'react'
import { Form } from '../../style'

function Search({ value, setQuery, handleOnSearch }) {
  return (
    <Form.Container>
      <Form.Input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={({ target: { value: query } }) => setQuery(query)}
      />
      <Form.Button onClick={handleOnSearch}>Search</Form.Button>
    </Form.Container>
  )
}

export default Search
