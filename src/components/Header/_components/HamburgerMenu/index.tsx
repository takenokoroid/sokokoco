const HamburgerMenu = () => {
  return (
    <div className="relative">
      <button
        type="button"
        aria-label="メニューを開く"
        popoverTarget="header-menu"
        className="flex size-9 items-center justify-center rounded hover:bg-gray-100 [anchor-name:--menu-button]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="3" y1="5" x2="17" y2="5" />
          <line x1="3" y1="10" x2="17" y2="10" />
          <line x1="3" y1="15" x2="17" y2="15" />
        </svg>
      </button>

      <dialog
        id="header-menu"
        popover="auto"
        className="m-0 mt-1 min-w-40 rounded border border-gray-200 bg-white py-1 shadow-lg [inset:unset] [position-anchor:--menu-button] [top:anchor(bottom)] [right:anchor(right)]"
      >
        <a
          href="/about"
          className="block px-4 py-2 text-sm hover:bg-gray-100"
        >
          このサイトについて
        </a>
      </dialog>
    </div>
  );
};

export default HamburgerMenu;
