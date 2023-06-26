import placeholder from "../../assets/placeholder.png";
import bassengMain from "../../assets/bassengkveld.jpg";
import "./BassengPage.css";

export function BassengPage() {
  return (
    <div className="basseng-main">
      <h2>Vi har flere type bassenger</h2>
      <div className="main-basseng">
        <div className="basseng-main-img">
          <img src={bassengMain} alt="" />
        </div>
        <div className="basseng-main-txt">
          <h2>Hoved basseng</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            quidem.
          </p>
        </div>
      </div>
      <div className="terapi-basseng">
        <div className="terapi-basseng-img">
          <img src={placeholder} alt="" />
        </div>
        <div className="terapi-basseng-txt">
          <h2>Terapi basseng</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            soluta.
          </p>
        </div>
      </div>
    </div>
  );
}
