import "./Aktiviteter.css";
import placeholder from "../../assets/placeholder.png";

export function AktiviteterPage() {
  return (
    <div>
      <div className="aktiviteter-title">
        <h2>Aktiviteter</h2>
        <h3>Vi har aktiviteter for både store og små</h3>
        <p></p>
      </div>
      <div className="barnebursdag-container">
        <div>
          <img src={placeholder} alt="" />
        </div>
        <div className="barnebursdag-info">
          <h3>Barnebursdag</h3>
          <h2>Mye fart og morro med barnebursdag</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis non, tempore numquam natus facere hic necessitatibus
            nesciunt voluptates enim quasi expedita alias maiores, eaque dicta
            iure saepe laboriosam eum illo!
          </p>
        </div>
      </div>
    </div>
  );
}
