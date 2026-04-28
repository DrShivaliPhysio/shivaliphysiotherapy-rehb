'use client'

import Image from "next/image"
import { InstagramIcon, ArrowUpRight, Play, Clapperboard } from "lucide-react"
import { Constants, Posts } from "@/lib/constants"
import { useEffect } from "react"




export function InstagramSection() {

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = "//www.instagram.com/embed.js"
  //   script.async = true
  //   document.body.appendChild(script)
  // }, [])


  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{Constants.instaHandle}</span>
            <h2 className="mt-3 text-pretty font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              Small tips, everyday.
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
              Exercises, posture resets and patient awareness — bite-sized content for your feed.
            </p>
          </div>
          <a
            href={Constants.instaHandleLink}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow on Instagram
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-fr">
          {Posts.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <img
                src={p.src}
                alt={p.alt}
                className="w-full aspect-[9/16] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* 🔝 Top Left (Profile) */}
              <div className="absolute top-2 left-2 flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-1 rounded">
                <InstagramIcon className="w-3 h-3" />
                <span>@drshivali_physiotherapyclinic</span>
              </div>

              {/* 🔝 Top Right (Reel icon) */}
              <div className="absolute top-2 right-2 text-white bg-black/50 p-1 rounded">
                <Clapperboard className="w-4 h-4" />
              </div>

              {/* ▶ Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition">
                  <Play className="w-5 h-5 text-black" />
                </div>
              </div>

              {/* ❤️ Bottom actions (Instagram feel) */}
              <div className="absolute bottom-8 left-2 flex gap-2 text-white">
                <span>❤️</span>
                <span>💬</span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 w-full p-2 text-white text-xs bg-gradient-to-t from-black/90 to-transparent">
                <p className="line-clamp-2">{p.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
