export default function FeaturedBrand() {
  return (
    <section>
      <h1 className="text-3xl font-medium mb-2 text-balance">Our partners</h1>
      <p className="text-zinc-500 text-balance">
        Some of the brands we work with
      </p>
      <div className="*:w-full my-10 *:max-w-40 border p-5 rounded flex justify-center gap-10 flex-wrap bg-zinc-100">
        <img
          src="/images/brands/Kinetic_Labs_logo.png"
          className="h-12"
          alt="kbdfans_logo_light"
        />
        <img src="/images/brands/durock.png" className="h-12" alt="durock" />
        <img src="/images/brands/gmk.png" className="h-12" alt="gmk" />
        <img
          src="/images/brands/kbdfans_logo_light.png"
          className="h-12"
          alt="kbdfans_logo_light"
        />
        <img
          src="/images/brands/keychron_logo.png"
          className="h-12"
          alt="keychron_logo"
        />
        <img
          src="/images/brands/Ducky_Logo.png"
          className="h-12"
          alt="Ducky_Logo"
        />
        <img
          src="/images/brands/leopold_logo.png"
          className="h-12"
          alt="leopold_logo"
        />
        <img
          src="/images/brands/wuque-logo.png"
          className="h-12"
          alt="wuque-logo"
        />
        <img
          src="/images/brands/realforce_logo.png"
          className="h-12"
          alt="realforce_logo"
        />
      </div>
    </section>
  );
}
