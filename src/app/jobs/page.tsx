'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const JobsPage = () => {
  const router = useRouter();
  router.push('/jobs/preview')
  return (
    <div>

    </div>
  )
}

export default JobsPage
