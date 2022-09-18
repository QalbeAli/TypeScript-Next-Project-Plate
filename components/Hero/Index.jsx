import Header from '../Header/header'

export default function Hero() {
  return (
    <>
      <div className="h-[70vh] bg-red-500">
        <div
          className="vcenterFlex filters-container home relative mt-20 w-full lg:mt-0"
          style={{
            backgroundImage: `url(images/main.jpg)`,
          }}
        >
          {/* <Header marginLeft="4rem" /> */}

          <div className="container">
            <h1 className="HomeBannerText mb-0 text-center text-3xl text-white md:text-4xl xl:mb-4 2xl:text-5xl">
              8,163 properties in Zimbabwe
            </h1>
            <div className="filter-tabs relative mx-auto mb-6 flex w-full justify-between">
              <div
                className="filter-tab filter-type-tab selected pt-4 text-center text-white"
                id="Filter1"
                data-typeid="1"
                data-text="For Sale"
              >
                <a href="">For Sale</a>
              </div>
              <div
                className="filter-tab filter-type-tab pt-4 text-center text-white"
                id="Filter2"
                data-typeid="2"
                data-text="For Rent"
              >
                <a href="">For Rent</a>
              </div>
              <div className="pt-4 text-center text-white">
                <a href="/development-projects">Projects</a>
              </div>
              <div className="hidden pt-4 text-center text-white md:block">
                <a href="/request-a-property">Requests</a>
              </div>
              <div className="pt-4 text-center text-white">
                <a href="/showdays">Showdays</a>
              </div>
            </div>

            <form
              className="filters loading-spinner"
              action="/search"
              data-culture="/"
            >
              <select
                className="custom-select-inverse mandateType hidden"
                id="type_id"
                name="type_id"
              >
                <option selected="selected" value="1">
                  For Sale
                </option>
                <option value="2">For Rent</option>
              </select>
              <div className="flex flex-col md:flex-row">
                <div
                  id="locationHolder"
                  className="relative mb-2 h-12 w-full cursor-text rounded-md bg-white pl-3 md:mb-0 md:w-1/3 md:rounded-r-none xl:h-16"
                >
                  <input type="hidden" name="filterversion" value="new" />
                  <span className="Select2Placeholder text-graypurpledark absolute top-5 left-0 h-full w-full">
                    Enter a location
                  </span>
                  <div
                    className="lds-ellipsis select small absolute hidden"
                    style={{ top: '20%', right: '15%' }}
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <select
                    className="filter-select border-graypurple invisible border-l pl-4"
                    name="Locations"
                    aria-label="Location"
                    multiple="multiple"
                    size="1"
                    style={{ width: '100%' }}
                  ></select>
                </div>
                <div className="grid w-full grid-cols-2 grid-rows-1 md:w-1/2">
                  <div className="categories">
                    <div
                      className="dropdown-toggle dropdown-arrow vcenterFlex border-graypurple text-graypurpledark mb-2 h-12 cursor-pointer rounded-md border-l bg-white pl-3 md:rounded-none lg:mb-1 xl:h-16"
                      match-width="true"
                    >
                      Property Type
                    </div>
                    <ul
                      className="border-inputborder absolute z-10 hidden cursor-pointer rounded-md border bg-white"
                      data-select="category"
                      style={{ display: 'none' }}
                    >
                      <li
                        className="hover:bg-primary rounded-t-md p-4 transition-all hover:text-white"
                        value="14"
                      >
                        Houses (4174)
                      </li>
                      <li
                        className="hover:bg-primary p-4 transition-all hover:text-white"
                        value="17"
                      >
                        Land (2677)
                      </li>
                      <li
                        className="hover:bg-primary p-4 transition-all hover:text-white"
                        value="13"
                      >
                        Commercial Property (948)
                      </li>
                      <li
                        className="hover:bg-primary p-4 transition-all hover:text-white"
                        value="16"
                      >
                        Flats &amp; Apartments (534)
                      </li>
                      <li
                        className="hover:bg-primary p-4 transition-all hover:text-white"
                        value="21"
                      >
                        Rooms (80)
                      </li>
                      <li
                        className="hover:bg-primary p-4 transition-all hover:text-white"
                        value="36"
                      >
                        Student Accommodation (1)
                      </li>
                    </ul>
                  </div>
                  <input type="hidden" name="category" id="category" />
                  <input
                    type="text"
                    className="custom-input priceformat border-graypurple ml-2 rounded-md border-l md:ml-0 md:rounded-none"
                    id="maxprice"
                    inputMode="numeric"
                    name="maxprice"
                    placeholder="Enter Max. Price"
                    data-number-delimiter=","
                  />
                </div>
                <button
                  className="SearchButton bg-button search-listings relative w-full rounded-md border-0 text-white md:right-1 md:w-1/6"
                  type="button"
                >
                  {/* <Image
              src="/content/overhaul/Image/svg/mod/search-empty.svg"
              className="filter-white mx-auto hidden h-7 w-7 lg:block"
            /> */}
                  <span className="lg:hidden">Search</span>
                </button>
              </div>
            </form>
          </div>
          <a
            href="https://www.facebook.com/barry.lungu"
            target="_blank"
            className="absolute bottom-2 right-2 text-xs text-white"
          >
            Art by Barry Lungu
          </a>
        </div>
      </div>
    </>
  )
}
