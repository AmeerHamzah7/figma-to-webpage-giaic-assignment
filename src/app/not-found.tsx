import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-white m-60 p-11 flex flex-col justify-center items-center gap-5 border-white border-[5px]'>
      <h2>404 - Oops! Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='hover:text-red-500 underline-offset-2'>Return Home</Link>
    </div>
  )
}