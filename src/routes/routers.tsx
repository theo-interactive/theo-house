import * as React from 'react'
import { Route, Navigate } from 'react-router-dom'

import AnimatedRouters from 'routes/animatedRouters'
import Main from 'pages/main'

function Routers() {
  return (
    <AnimatedRouters classNames='page-trans' timeout={300}>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </AnimatedRouters>
  )
}

export default Routers
