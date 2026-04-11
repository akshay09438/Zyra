const LOGOS = [
  { src: '/logos/1.png',  alt: 'Adani logo' },
  { src: '/logos/2.png',  alt: 'NDTV logo' },
  { src: '/logos/3.png',  alt: 'Cars24 logo' },
  { src: '/logos/4.png',  alt: 'Swiggy logo' },
  { src: '/logos/5.png',  alt: 'Wildstone logo' },
  { src: '/logos/6.png',  alt: 'Meesho logo' },
  { src: '/logos/7.png',  alt: 'Country Delight logo' },
  { src: '/logos/8.png',  alt: 'JITO logo' },
  { src: '/logos/9.png',  alt: 'Nandi Pictures logo' },
  { src: '/logos/10.png', alt: 'Devam Originals logo' },
  { src: '/logos/11.png', alt: 'VAMA logo' },
  { src: '/logos/12.png', alt: 'KissanSay logo' },
  { src: '/logos/13.png', alt: 'Bharat Ki Soch logo' },
  { src: '/logos/14.png', alt: 'Madhusudhan Ghee logo' },
  { src: '/logos/15.png', alt: 'InYou logo' },
  { src: '/logos/16.png', alt: 'Mederma logo' },
  { src: '/logos/17.png', alt: 'Goodscore logo' },
]

export function LogoTicker() {
  return (
    <section
      style={{
        background: '#080808',
        paddingTop: 'clamp(48px, 8vw, 100px)',
        paddingBottom: 'clamp(48px, 8vw, 110px)',
        position: 'relative',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            fontWeight: 800,
            marginBottom: '16px',
          }}
        >
          Trusted by brands that
        </p>
        <h2
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(48px, 8vw, 100px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#F5F4F0',
            margin: 0,
          }}
        >
          Shape The World
        </h2>
      </div>

      {/* Top fade — smooth entry from hero */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, #080808, transparent)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Left/right edge fades */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0,0,0,1) 100%)',
          background: '#080808',
        }}
      />

      {/* Overflow clip wrapper */}
      <div style={{ overflow: 'hidden', width: '100%', position: 'relative', zIndex: 3 }}>
        {/* Track */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'logoScroll 25s linear infinite',
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                marginRight: '64px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[60px] md:h-[100px] lg:h-[140px] w-auto max-w-[160px] md:max-w-[220px] lg:max-w-[300px] object-contain"
                style={{ opacity: 0.85, mixBlendMode: 'screen' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
