import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './App'

test('Renders the search page', () => {
  const { getByText } = render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )

  expect(
    getByText(/Start by looking up you favorite TV show!/i)
  ).toBeInTheDocument()
})
