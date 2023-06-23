import "./LandingPage.css";
import background from "../assets/basseng-med-leker.jpg";
export function LandingPage() {
  return (
    <>
      <div
        className="part1-main"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <span role="img" aria-label="basseng"></span>
        <div className="box1">
          <h2>Velkommen til havhesten</h2>
          <p>Havhesten er i vanleg drift</p>
        </div>
      </div>
      <div>
        <section className="box2">
          <div class="second-section">
            <h3 class="grid-item1">nyheter</h3>
            <h2 class="grid-item2">sommerkampanje</h2>
            <p class="grid-item3">
              Bli medlem i Havhesten idag og slipp innmeldingsavgift på 250,-.
              Kompanjen varer ut juli.
            </p>
            <button class="btn grid-item5">bli medlem da vel!</button>
            <img class="grid-item4" src="./img/placeholder.png" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
