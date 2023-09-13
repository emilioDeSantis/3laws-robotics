"use client"
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import useHideNavOnScroll from '@/hooks/useHideNavOnScroll';

const Header: React.FC = () => {

  const visable = useHideNavOnScroll()
  return (
    <div
    className='page-padding'
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBlock: "0.3rem",
        backgroundColor: "#0b0b0b",
        color: "white",
        zIndex: 1000,
        fontFamily: 'korataki',
        letterSpacing: "0.1em",
        transform: `translateY(${visable? 0 : -4}rem)`,
        transition: '0.3s'

      }}
    >
      <Link
      href='/'>
        <h1
          style={{
            color: "#99ffff",
            fontWeight: 500,
            lineHeight: "90%",
            fontSize: "1.25rem",
          }}
        >
          3<span style={{ color: "white" }}>LAWS</span>
        </h1>
        <p
          style={{
            color: "white",
            letterSpacing: "1.4em",
            fontSize: "0.45rem",
          }}
        >
          ROBOTICS
        </p>
      </Link>
      <nav
      className='desktop'
        style={{
          color: "#fff9",
          gap: "4vw",
          fontSize: "0.6rem",
          fontWeight: 300,
        }}
      >
      <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className='mobile'>
        <DropdownMenu/>
      </div>
    </div>
  );
}

export default Header;
