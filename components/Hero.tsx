import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='hero' id="#top">
      <div className='pt-36 sm:px-20'>
        
        <h1 className='hero__title'>
          Make stylish, professional websites that you can be proud of.
        </h1>

        <Image
          className="float-right overflow-hidden"
          src="/window.svg"
          alt=""
          width={300}
          height={130}
        />

        <p className='hero__subtitle'>
          Take coding to the next level -- with me!<br/>
          See what I have to offer:
        </p>

        <Link href="#about">
          <button className="button">
            Explore
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero