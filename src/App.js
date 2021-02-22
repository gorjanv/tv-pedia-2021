import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import ShowDetails from './pages/ShowDetails'
import EpisodeDetails from './pages/EpisodeDetails'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/show/:showId' component={ShowDetails} />
      <Route
        exact
        path='/show/:showId/episode/:episodeId'
        component={EpisodeDetails}
      />
      <Route render={() => <div>Not found</div>} />
    </Switch>
  </>
)

export default App
