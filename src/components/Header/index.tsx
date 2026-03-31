import HamburgerMenu from "./_components/HamburgerMenu";

const Header = () => {
  return (
    <header className="border-b border-gray-200 px-2 py-3 sm:px-4">
      <nav className="mx-auto flex max-w-prose items-center justify-between">
        <a href="/" className="inline-block px-2 py-1 text-lg font-semibold">
          Sokokoco
        </a>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Header;
