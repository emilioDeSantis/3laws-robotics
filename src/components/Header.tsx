import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1vw 7vw",
        backgroundColor: "transparent",
        color: "white",
        zIndex: 1000,
        fontFamily: 'korataki',
        letterSpacing: "0.1em",
      }}
    >
      <div>
        <h1
          style={{
            color: "#99ffff",
            fontWeight: 500,
            lineHeight: "90%",
            fontSize: "1.55rem",
          }}
        >
          3<span style={{ color: "white" }}>LAWS</span>
        </h1>
        <p
          style={{
            color: "white",
            letterSpacing: "1.4em",
            fontSize: "0.55rem",
          }}
        >
          ROBOTICS
        </p>
      </div>
      <nav
        style={{
          color: "#fff9",
          display: "flex",
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
    </div>
  );
}

export default Header;
