import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import myImage from '../../public/static/images/tendederos/IMG_0336.jpeg'
import myImage2 from '../../public/static/images/tendederos/IMG_0337.jpeg'
import myImage3 from '../../public/static/images/tendederos/IMG_0349.jpeg'

import myImage4 from '../../public/static/images/tendederos/IMG_0344.jpeg'
import myImage5 from '../../public/static/images/tendederos/IMG_0345.jpeg'
import myImage6 from '../../public/static/images/tendederos/IMG_0341.jpeg'
import myImage7 from '../../public/static/images/tendederos/IMG_0346.jpeg'

import myImage8 from '../../public/static/images/tendederos/IMG_0349.jpeg'
import myImage9 from '../../public/static/images/tendederos/IMG_0340.jpeg'
import myImage10 from '../../public/static/images/tendederos/IMG_0342.jpeg'
import myImage11 from '../../public/static/images/tendederos/IMG_0343.jpeg'

// import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
// import { RadioGroup } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'

export const metadata = genPageMetadata({ title: 'Tienda' })

const product = {
  name: 'Tendedero plegable de acero',
  price: '$200',
  href: '#',
  images: [
    {
      id: 1,
      imageSrc: myImage,
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: myImage2,
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: myImage3,
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  description: `
    <p>Tendedero plegable fabricado en acero, cordeles de acero forrado con plástico y seguros de metal.</p>
    <p>Longitud y número de cordeles personalizable.</p>
  `,
  details: [
    'Fabricado en acero',
    'Cables de acero cubiertos con plástico',
    'Longitud personalizable',
    'Número de cordeles personalizable',
  ],
}

const policies = [
  {
    name: 'Solicita envío',
    icon: GlobeAmericasIcon,
    description: 'Get your order in 2 years',
  },
  {
    name: 'Solicita instalación',
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
]

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description: 'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description: 'Made from natural materials. Grain and color vary with each item.',
  },
]

const features2 = [
  {
    name: 'Perfiles de acero',
    description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
    imageSrc: myImage4,
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
  },
  {
    name: 'Cordel de acero',
    description:
      'Each refill pack contains plenty of cards to last you a month of procrastination.',
    imageSrc: myImage5,
    imageAlt: 'Green cardstock box open with 50 cards inside.',
  },
  {
    name: 'Seguros de cordel',
    description: 'Flip a card over to doodle during meetings when you should be listening.',
    imageSrc: myImage6,
    imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
  },
  {
    name: 'Tornillos para instalar',
    description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
    imageSrc: myImage7,
    imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>
      <div className="pb-2 pt-32 sm:pb-2">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                <p className="text-xl font-medium text-gray-900">{product.price}</p>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
                {product.images.map((image) => (
                  <Image
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                      'rounded-lg'
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-0 lg:col-span-5">
              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Descripción</h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form>
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Comprar ahora
                </button>
              </form>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">Características</h2>

                <div className="prose prose-sm mt-4 text-gray-500">
                  <ul>
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Especificaciones Tecnicas
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
            The powder coated steel divider separates active cards from new ones, or can be used to
            archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src={myImage8}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <Image
            src={myImage9}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <Image
            src={myImage10}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <Image
            src={myImage11}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Qué incluye el producto?
          </p>
          <p className="mt-4 text-gray-500">
            Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next.
            Forget distracting digital apps and embrace these small, sturdy pieces of paper.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features2.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
