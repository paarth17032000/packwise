'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export default function Header() {
  const router = useRouter() 
  return (
    <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Button
            variant="link"
            className="text-xl font-semibold px-0 text-(--brand)"
            onClick={() => router.push('/')}
        >
            Packwise
        </Button>
        
        <Button 
            variant="outline"
            className="button-hover transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => router.push('/')}
        >
            New Trip <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        </div>
    </header>
  )
}
