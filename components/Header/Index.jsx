import Image from 'next/image'
import Images from '../../public/images/Images'

export default function Header() {
  return (
    <>
      <header className=" header-home flex items-center  justify-between pt-[40rem] ">
        <div
          className="Header container absolute top-0 bg-black"
          style={{ zIndex: '70' }}
        >
          <nav className="nav-hamburger  lg:hidden">
            <div
              id="mobileMainNavBtn"
              className="absolute top-6 left-6 z-30"
              style={{ ZIndex: '90' }}
            >
              {/* <Image src={Images.hamburger} layout="fill" className="h-7 w-7" /> */}
            </div>
            <div
              id="mobileProfileNavBtn"
              className="absolute right-6 z-30"
              style={{ top: '1.41rem', zIndex: '90' }}
            >
              {/* <Image
                style={{ width: '30.4px', height: '30.4px' }}
                src={Images.user2}
                layout="fill"
              /> */}
            </div>
            <div
              id="mobileMainNav"
              className="fixed -left-full top-20 z-20 hidden bg-white p-5 transition-all"
              style={{
                width: '300px',
                borderTop: '1px #ebeff2 solid',
                boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.1)',
                overflow: 'scroll',
              }}
            >
              <button
                type="button"
                id="loginlink"
                className="submit mb-6 w-full py-2"
              >
                Sign In
              </button>
              <a
                href="/property-for-sale"
                className="mb-4 block"
                style={{ color: '#384e85' }}
              >
                {/* <Image
                  src={Images.one}
                  layout="fill"
                  className="mr-2.5 inline-block"
                  style={{
                    width: '1.25rem',
                    position: 'relative',
                    bottom: '1px',
                  }}
                /> */}
                For Sale
              </a>
              <a
                href="/property-for-rent"
                className="mb-4 block"
                style={{ color: '#384e85' }}
              >
                {/* <Image
                  src={Images.two}
                  layout="fill"
                  className="mr-2.5 inline-block"
                  style={{
                    width: '1.25rem',
                    position: 'relative',
                    bottom: '1px',
                  }}
                /> */}
                For Rent
              </a>
              <a
                href="/development-projects"
                className="block"
                style={{ color: '#384e85' }}
              >
                {/* <Image
                  src={Images.project}
                  layout="fill"
                  className="mr-2 inline-block"
                  style={{
                    width: '1.375rem',
                    position: 'relative',
                    bottom: '1px',
                  }}
                /> */}
                Projects
              </a>
              <a
                href="/showdays"
                className="relative mt-4 block"
                style={{ color: '#384e85' }}
              >
                {/* <Image
                  src={Images.project}
                  className="mr-2 inline-block"
                  style={{
                    width: '1.375rem',
                    position: 'relative',
                    bottom: ' 1px',
                  }}
                /> */}
                Showdays
                <span
                  className="highlight-new highlight-showdays-mobile"
                  style={{ left: '7.125rem' }}
                >
                  New
                </span>
              </a>
              <div className="relative py-4">
                <div
                  className="seperator absolute -left-5"
                  style={{
                    height: '1px',
                    width: '300px',
                    background: '#ebeff2',
                  }}
                ></div>
              </div>
              <a
                className="dropdown-toggle mb-4 block"
                style={{ color: '#384e85' }}
              >
                {/* <Image
                  src={Images.settings}
                  className="mr-2.5 inline-block"
                  style={{
                    width: '1.25rem',
                    position: 'relative',
                    bottom: '1px',
                  }}
                /> */}
                Currency
              </a>
              <div
                className="relative -top-3 hidden pl-9"
                style={{ display: 'none' }}
              >
                <a href="" className="text-graypurpledark block py-1">
                  USD
                </a>
                <a href="" className="text-graypurpledark block py-1">
                  ZWL
                </a>
              </div>
            </div>
          </nav>
          <nav
            className="nav-desktop absolute hidden justify-between text-white lg:flex"
            style={{ width: '1050px', top: '2rem' }}
          >
            <div className="flex">
              {/* <div>
                <a
                  id="HeaderLogoHome"
                  className="vcenterFlex h-full"
                  style={{ marginRight: '2rem', maxHeight: '3.75rem' }}
                  href="/"
                >
                  <Image
                    src={Images.property}
                    className=""
                    alt="Property.co.zw"
                  />
                </a>
              </div> */}
              <div className="vcenterFlex">
                <div className="top-item relative">
                  <a
                    href="/property-for-sale"
                    className="menu-pad inline-block px-4"
                  >
                    For Sale ▾
                  </a>
                  <div className="sub-item shadow-darker text-graypurpledark invisible absolute left-2 whitespace-nowrap rounded-md bg-white opacity-0 transition-all">
                    <a
                      href="/houses-for-sale"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Houses
                    </a>
                    <a
                      href="/land-for-sale"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Land
                    </a>
                    <a
                      href="/commercial-property-for-sale"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Commercial Property
                    </a>
                    <a
                      href="/flats-apartments-for-sale"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Flats &amp; Apartments
                    </a>
                  </div>
                </div>
                <div className="top-item relative">
                  <a
                    href="/property-for-rent"
                    className="menu-pad inline-block px-4"
                  >
                    For Rent ▾
                  </a>
                  <div className="sub-item shadow-darker text-graypurpledark invisible absolute left-2 whitespace-nowrap rounded-md bg-white opacity-0 transition-all">
                    <a
                      href="/houses-for-rent"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Houses
                    </a>
                    <a
                      href="/commercial-property-for-rent"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Commercial Property
                    </a>
                    <a
                      href="/rooms-for-rent"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Rooms
                    </a>
                    <a
                      href="/flats-apartments-for-rent"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Flats &amp; Apartments
                    </a>
                    <a
                      href="/land-for-rent"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Land
                    </a>
                    <a
                      href="/student-accommodation-for-rent"
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      Student Accommodation
                    </a>
                  </div>
                </div>
                <div className="top-item">
                  <a
                    href="/development-projects"
                    className="menu-pad inline-block px-4"
                  >
                    Projects
                  </a>
                </div>
                <div className="top-item relative">
                  <a href="/services" className="menu-pad inline-block px-4">
                    Services ▾
                  </a>
                  <div className="sub-item shadow-darker text-graypurpledark invisible absolute left-2 whitespace-nowrap rounded-md bg-white opacity-0 transition-all">
                    <a
                      href="/homeloan"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      Home loan
                    </a>
                    <a
                      href="/insurance"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      Insurance
                    </a>
                    <a
                      href="/valuation"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      Valuation
                    </a>
                    <a
                      href="/internet"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      Internet
                    </a>
                    <a
                      href="/energy"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      Energy
                    </a>
                  </div>
                </div>
                <div className="top-item relative">
                  <a href="/blog" className="menu-pad inline-block px-4">
                    Blog ▾
                  </a>
                  <div className="sub-item shadow-darker text-graypurpledark invisible absolute left-2 whitespace-nowrap rounded-md bg-white opacity-0 transition-all">
                    <a
                      href="/blog"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      News
                    </a>
                    <a
                      href="/magazine"
                      className="hover:bg-primary block py-2.5 px-2.5 pr-6 transition-all hover:text-white"
                    >
                      Magazine
                    </a>
                  </div>
                </div>
                <div className="top-item relative">
                  <a href="/showdays" className="menu-pad inline-block px-4">
                    Showdays
                  </a>
                  <span
                    className="highlight-new"
                    style={{ right: '-1.5625rem' }}
                  >
                    New
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex">
              <div className="vcenterFlex z-20">
                <div className="MyAccount top-item relative">
                  <a
                    href="#"
                    className="menu-pad inline-block cursor-pointer px-4"
                  >
                    My Account ▾
                  </a>
                  <div className="sub-item shadow-darker text-graypurpledark invisible absolute left-2 whitespace-nowrap rounded-md bg-white opacity-0 transition-all">
                    <span
                      id="loginlink"
                      className="hover:bg-primary block cursor-pointer rounded-t-md border-b border-gray-200 py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                      data-featherlight="#login-options-modal"
                      style={{ paddingRight: '4.5rem' }}
                    >
                      Login
                    </span>
                    <span
                      className="hover:bg-primary block cursor-pointer rounded-b-md py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                      onCick="if (!window.__cfRLUnblockHandlers) return false; Overhaul.Misc.ShowRegisterModal()"
                    >
                      Sign Up
                    </span>
                  </div>
                </div>
                <div className="MultiCurrency top-item relative">
                  <a href="#" className="menu-pad inline-block px-4">
                    USD ▾
                  </a>
                  <div className="sub-item shadow-darker text-graypurpledark invisible absolute left-2 whitespace-nowrap rounded-md bg-white opacity-0 transition-all">
                    <a
                      href=""
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      USD
                    </a>
                    <a
                      href=""
                      className="hover:bg-primary block py-2.5 pl-2.5 pr-6 transition-all hover:text-white"
                    >
                      ZWL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
