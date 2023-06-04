import Link from 'next/link';
import './css/title-page.css';

export default function Home() {
  return (
    <main className="main-body">
      <h1 className="main-title">Welcome to my Website</h1>
      <Link href="./pages/main_menu" className='title-container'>
        <h1 className="main-content border-t-2 border-white">Click Here To Get To Know Me</h1>
      </Link>
    </main>
  )
}
