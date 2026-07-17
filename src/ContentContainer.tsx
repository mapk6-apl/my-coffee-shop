import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export const ContentContainer: React.FC<Props> = ({children, className}) => {
  return (
    <div className={'content-container'}>
      {children}
    </div>
  )
}
