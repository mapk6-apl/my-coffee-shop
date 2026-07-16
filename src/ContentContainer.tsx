import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export const ContentContainer: React.FC<Props> = ({children, className}) => {
  return (
    <div className={className} style = {{border: '10px' , backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '80px', margin: '70px', padding: '110px'}}>
      {children}
    </div>
  )
}
