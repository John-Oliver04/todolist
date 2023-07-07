import Image from 'next/image'
import Todos from './projects/todolist/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <ul className='flex gap-2'>
          <li><a className='' href='/'>Home</a></li>
          <li><a className='p-2 bg-blue-600 hover:bg-blue-700 border text-white ' href='/projects/todolist'>TodoApp</a></li>
        </ul>
      </nav>
    </main>
  )
}
