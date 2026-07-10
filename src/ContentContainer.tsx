import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

export const ContentContainer: React.FC<Props> = ({children, className}) => {
  return (
    <div className={className} style = {{border: '10px' , backgroundColor: 'rgba(225, 212, 212, 0.5)', borderRadius: '40px', margin: '50px', padding: '50px'}}>
      {children}
    </div>
  )
}
