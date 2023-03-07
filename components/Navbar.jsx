import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div>
                <Link href="/">
                    <h1>Navbar</h1>
                </Link>
                <ul>
                <Link href="/">Home</Link>
                </ul>
                <ul>
                <Link href="/#gallery">Gallery</Link>
                </ul>
                <ul>
                <Link href="/Portfolio">Work</Link>
                </ul>
                <ul>
                <Link href="/Contact">Contact</Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar