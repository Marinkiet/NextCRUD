import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="flex justify-between items-center rounded-sm drop-shadow-lg bg-purple-300 px-8 py-3">
        <Link className="text-white font-bold" href="/">Codeapple</Link>
        <Link className="bg-white p-2 rounded-full drop-shadow-lg" href="/addTopic">Add topic</Link>
    </nav>
  )
}