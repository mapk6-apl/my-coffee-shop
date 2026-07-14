import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export const ContentContainer: React.FC<Props> = ({children, className}) => {
  return (
    <div className={className} style = {{border: '10px' , backgroundColor: 'rgba(225, 212, 212, 0.68)', borderRadius: '40px', margin: '70px', padding: '70px'}}>
      {children}
    </div>
  )
}
