import { UserButton } from '@clerk/nextjs';
import React from 'react'

const page = () => {
  return (
    <UserButton afterSignOutUrl='/' />
  )
}

export default page;