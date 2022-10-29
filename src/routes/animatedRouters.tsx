import * as React from 'react'
import { ReactNode } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface IProps {
  classNames: string
  timeout: number
  children: ReactNode
}

function AnimatedRouters({ classNames, timeout, children }: IProps) {
  const location = useLocation()
  return (
    <TransitionGroup className='main-container'>
      <CSSTransition key={location.key} classNames={classNames} timeout={timeout}>
        <Routes location={location}>
          {children}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimatedRouters
