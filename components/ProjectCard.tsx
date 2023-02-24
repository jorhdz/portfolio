import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProjectCard({ project }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt="project image"
          src={project.imageGroups[0].images[0].link}
          fill
          className={cn(
            'object-cover duration-700 ease-in-out group-hover:opacity-75	',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{project.name}</h3>
        <p>${project.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">
        {project.shortDescription}
      </p>
      </>
  )
}