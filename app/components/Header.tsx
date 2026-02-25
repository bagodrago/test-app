import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="flex flex-row items-center gap-[48px] font-bold">
          <Image
            // className="dark:invert"
            src="/logotk.svg"
            alt="A snazzy logo"
            width={130}
            height={80}
            
          />
          <a className="header__button" href="https://www.github.com/bagodrago">Home</a>
          <a className="header__button" href="https://www.github.com/bagodrago">About</a>
          <a className="header__button" href="https://www.github.com/bagodrago">More</a>
        </div>
      </header>
    </div>
  )
}

export default Header