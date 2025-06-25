import Link from 'next/link'

export default function NotFound() {
  return (
    <>
  
    <div className="flex flex-col items-center justify-center min-h-screen relative z-10000 ">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className='text-cyan-500 cursor-pointer ring-2 p-2 m-4 rounded-4xl hover:bg-cyan-700 hover:text-slate-300 hover:ring-0 transition font-bold shadow-[0px_1px_10px_4px_cyan] hover:shadow-[0px_0px_0px_0px_cyan] '>Return Home</Link>
    </div>
    </>
  );
}
