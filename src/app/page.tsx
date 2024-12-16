import { FaArrowRight } from 'react-icons/fa'
import { fonts } from './fonts'

export default function Home () {
  return (
    <div className=''>
      <div className='h-screen bg-[url(/lines2.svg)] bg-cover md:px-20 px-5 flex justify-center items-center'>
        <div className={`text-white ${fonts.outfit.className}`}>
          <div className='flex md:mb-4 mb-2 justify-center gap-2 text-3xl md:text-6xl font-bold'>Simplify your <span className='gradient-text'>shipping</span></div>
          <div className='flex items-center md:gap-5 gap-2 justify-center text-3xl md:text-6xl font-bold'>Vendor <FaArrowRight className='md:text-4xl text-3xl' /> Vehicles with Ease</div>
        </div>
      </div>
    </div>
  )
}
