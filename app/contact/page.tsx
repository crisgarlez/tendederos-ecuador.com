import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ¿Necesitas ayuda?
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Ponte en contacto con nosotros.</p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Chatea con nosotros</h3>
            <p className="mt-2 leading-7 text-gray-600">
              Escríbenos a nuestro Whatsapp: +593987654321.
            </p>
            <p className="mt-4">
              <Link href={'/'} className="text-sm font-semibold leading-6 text-indigo-600">
                Escríbenos <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Conversa con nosotros
            </h3>
            <p className="mt-2 leading-7 text-gray-600">Llámanos al +593987654321</p>
            <p className="mt-4">
              <Link href={'/'} className="text-sm font-semibold leading-6 text-indigo-600">
                Llámanos <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Escríbenos un email</h3>
            <p className="mt-2 leading-7 text-gray-600">Puedes escribirnos a cambiame@gmail.com.</p>
            <p className="mt-4">
              <Link href={'/'} className="text-sm font-semibold leading-6 text-indigo-600">
                Escríbenos <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
