"use client"
import {useState} from 'react'
import React from 'react'
import WordMark from '@/components/WordMark';
import { asLink, Content } from '@prismicio/client';
import Link from 'next/link';
import { PrismicNextLink } from '@prismicio/next';
import ButtonLink from '@/components/ButtonLink';
import {MdMenu, MdClose} from 'react-icons/md'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type NavBarProps = {
  settings: Content.SettingsDocument
}
export default function NavBar({settings}: NavBarProps) {

  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  return (
    
    <nav className = "px-4 py-4 md:px-6 md-:py-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between 
      py-2 font-medium text-white md:flex-row md:items-center">
    <div className="flex items-center justify-between">


    
    <Link href="/" className="z-50"  onClick={()=> setOpen(false)}>
        <WordMark />
        <span className="sr-only">Darkness.ai HomePage</span>
        </Link>
    <button type="button" className="block p-2 text-3xl 
    text-white md:hidden"
    aria-expanded={open}
    onClick={() => setOpen(true)}
    >
      <MdMenu />
      <span className="sr-only">Open Menu</span>
    </button>




    </div>
    {/*Mobile Nav*/}
    <div className={clsx("fixed bottom-0 right-0 left-0 top-0 z-40 flex flex-col items-end ga-4 bg-[#070815] pr-4 pt-14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden", open ? 'translate-x-o' : 'translate-x-[100%]'

    )}>
      <button type="button" className="block p-2 text-3xl 
    text-white md:hidden fixed right-4 top-4 mb-4"
    aria-expanded={open}
    onClick={() => setOpen(false)}
    >
      <MdClose />
      <span className="sr-only">Close Menu</span>
    </button>
    <div className="grid justify-items-end gap-8">
    {settings.data.navigation.map((item)=>{
      if(item.cta_button){
        return(
          <ButtonLink key={item.label} field={item.link}
          onClick={()=> setOpen(false)}
          aria-current={
            pathname.includes(asLink(item.link) as string) ? "page" : undefined
          }>
            {item.label}
            </ButtonLink>
        )
      }
      return(
        <PrismicNextLink 
        key={item.label} 
        field={item.link}
        className="block px-4 text-3xl first:mt-8"
        onClick={()=> setOpen(false)}
        aria-current={
          pathname.includes(asLink(item.link) as string) ? "page" : undefined
        }
        >{item.label}
        </PrismicNextLink>
      )
    }
    )}
    </div>
    </div>



    {/* Desktop Nav */}
            <ul className=" gap-6 hidden md:flex">
                {settings.data.navigation.map((item) => {

                  if( item.cta_button){
                    return(
                      <li key={item.label}>
                      <ButtonLink field={item.link} aria-current={
          pathname.includes(asLink(item.link) as string) ? "page" : undefined
        }>
                        {item.label}
                        </ButtonLink>
                        </li>
                    )
                  }
                  return(
                    <li key={item.label}>
                        <PrismicNextLink field={item.link} 
                        className="inflex-flex min-h-11 items-center"
                        aria-current={
                          pathname.includes(asLink(item.link) as string) ? "page" : undefined
                        }>
                            {item.label}
                            </PrismicNextLink>
                    </li>
                    )})}
             </ul>
             </div>   
        </nav>
  )
}
