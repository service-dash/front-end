import { FaArrowRight } from 'react-icons/fa'
import { fonts } from './fonts'
import { FiArrowUpRight } from "react-icons/fi"
import Link from 'next/link'

export default function Home () {
  return (
    <div className=''>
      <div className='md:h-[400px] h-[300px] bg-[url(/lines2.svg)] bg-cover border-b md:px-20 px-5 border-b-white/20 flex justify-center items-center'>
        <div className={`text-white ${fonts.outfit.className}`}>
          <div className='flex md:mb-4 mb-2 justify-center gap-2 text-3xl md:text-6xl font-bold'>Simplify your <span className='gradient-text'>workflow</span></div>
          <div className='flex items-center md:gap-5 gap-2 justify-center text-3xl md:text-6xl font-bold'>Schema <FaArrowRight className='md:text-4xl text-3xl' /> Code with Ease</div>
          <div className='flex justify-center items-center gap-8 mt-10'>
            <Link href="/auth/signup" className='min-w-28 bg-contrast text-lg rounded-3xl text-black font-semibold h-12 flex justify-center px-10 items-center gap-2'>
              Try for free
            </Link>
            <Link href="/auth/login" className='min-w-28 bg-transparent border-b border-b-black text-lg rounded-none text-black font-semibold h-12 flex justify-center px-5 items-center gap-2'>
              Login
              <FiArrowUpRight className='font-bold' />
            </Link>
          </div>
        </div>
      </div>
      <div className='md:px-20 px-5 h-[640px] w-full aspect-video'>
        {/* <img loading='lazy' alt='Hero Image - collaborate, visualize and code' src="/app-image.png" className='w-full h-[640px]' /> */}
      </div>
    </div>
  )
}
