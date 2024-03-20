import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Link from '@/components/Link'

const features = [
  {
    name: 'Fácil manejo',
    description:
      'Su diseño intuitivo te permite abrirlo y cerrarlo en segundos, sin necesidad de herramientas ni esfuerzo físico.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Resistencia y durabilidad',
    description: 'Soporta cargas pesadas sin deformarse, ideal para la ropa de toda la familia.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Tu ropa libre de óxido',
    description:
      'Tus prendas estarán seguras y libres de manchas antiestéticas provocadas por el óxido en los cordeles.',
    href: '#',
    icon: TrashIcon,
  },
]

export default async function Page() {
  // const sortedPosts = sortPosts(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  // return <Main posts={posts} />

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 pb-4 pt-32 sm:pb-4 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Seca tu ropa de forma cómoda y eficiente.
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                ¿Cansado de tendederos endebles que ocupan espacio? ¡Conoce nuestro tendedero
                plegable de acero! Ahorra espacio y dinero con nuestro tendedero resistente y
                duradero, fabricado con materiales de alta calidad.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={'/'}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Comprar
                </Link>
                <Link href={'/'} className="text-sm font-semibold leading-6 text-gray-900">
                  Conoce más <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-10 lg:mt-10 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-10"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Ahorra espacio</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cada metro cuadrado cuenta
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En la era actual, el ahorro de espacio se ha convertido en una necesidad fundamental.
              Vivimos en hogares más pequeños, con menos espacio, nuestro tendedero se pliega de
              forma compacta para un fácil almacenamiento cuando no está en uso. .
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-indigo-600"
                      >
                        Conoce más <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt=""
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">
              Fabricado con materiales de alta calidad
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tendedero plegable de acero
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Olvídate de los tendederos tradicionales que ocupan espacio valioso en tu patio,
              balcón o lavandería. El tendedero plegable de acero te ofrece una solución práctica y
              eficiente para secar tu ropa sin sacrificar espacio.
            </p>
            <div className="mt-8">
              <Link
                href={'/'}
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Conoce los detalles del producto
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ¿Necesitas ayuda con la instalación?
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                ¡No te preocupes! Te ofrecemos un servicio de instalación profesional para tu
                tendedero plegable.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Contacta con nosotros y obtén un presupuesto personalizado.
              </p>
              <div className="mt-10 flex">
                <Link
                  href={'/'}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Conoce más <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
