import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to La Boucherie, where every dish tells a story of tradition, passion, and culinary excellence.
          </p>
          <p>Nestled in the heart of Mtwapa, our restaurant takes its name from the rich heritage of French butchery. La Boucherie, meaning "the butcher shop" in French, pays homage to the time-honored craft of master butchers who have long been the guardians of quality and flavor.</p>
          <p>At La Boucherie, dining is not just a meal; it's a celebration of life, love, and the joy of shared moments around the table. Whether you're savoring our signature Coq au Vin, indulging in a perfectly seared steak, or enjoying a glass of fine wine selected from our curated cellar, every bite tells a story of craftsmanship and dedication. But La Boucherie is more than just a restaurant—it's a gathering place for friends, families, and food lovers alike. From our warm and inviting ambiance to our attentive service, we strive to create an atmosphere where guests feel welcomed, cherished, and inspired to create lasting memories.

As we continue to write the next chapter in our culinary journey, we invite you to join us at La Boucherie and experience the magic of French cuisine, reimagined for the modern palate. Bon appétit!</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+254111748201">
            +254 111 748 201
          </a>
        </div>
      </section>
    </>
  )
}
