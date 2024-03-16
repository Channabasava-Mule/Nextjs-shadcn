import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
    title:string,
    className?: string
}

function PageTitle({title,className}: Props) {
  return (
    <h1 className= {cn("text-2l font-semibold",className)}>
        {title}
    </h1>
  )
}

export default PageTitle