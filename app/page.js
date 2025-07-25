"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Next Auth 
        </h1>
        <p className="text-muted-foreground text-lg">
          A modern next auth template built with ShadCN and Next.js.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/login">
            <Button className="">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" className="">Register</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
