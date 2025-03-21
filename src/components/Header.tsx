function Header() {
    return (
      <header>
        <h2>Microcks Hub</h2>
        <nav>
          <a href="/">Home</a> | <a href="/package/123">Package</a> |{" "}
          <a href="/package/123/api/456">API Version</a> | <a href="/doc/info">Doc</a>
        </nav>
      </header>
    );
  }
  export default Header;