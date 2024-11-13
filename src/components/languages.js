export default function Languages() {
    return (
      <div className="bg-inherit py-24 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Programming Languages Used in Building My Projects
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="php"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-125"
            />
            <img
              alt="javascript"
              src="https://icon2.cleanpng.com/20180824/qlv/kisspng-javascript-clip-art-openclipart-logo-number-1713949408965.webp"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-125"
            />
            <img
              alt="python"
              src="https://cdn.worldvectorlogo.com/logos/python-3.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-125"
            />
            <img
              alt="dart"
              src="https://banner2.cleanpng.com/20180409/zte/avgxeaj0d.webp"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:scale-125"
            />
            <img
              alt="Statamic"
              src="https://seeklogo.com/images/J/java-logo-AC1B3887F3-seeklogo.com.png"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-125"
            />
          </div>
        </div>
      </div>
    )
  }
  