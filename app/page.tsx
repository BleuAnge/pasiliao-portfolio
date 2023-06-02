import Link from 'next/link';
import './css/title-page.css';

export default function Home() {
  return (
    <main className="main-body">
      <Link href="./pages/main_menu">
        <h1 className="main-title">Welcome to my Website</h1>
      </Link>
    </main>
  )
}
