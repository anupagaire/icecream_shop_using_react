import '../css/style.css';
import conefirst from '../images/cone1.png';
import conesec from '../images/cone2.png';
import cone3 from '../images/cone3.png';



const Flavours = () => {
  return (
    <div className="flavours">
      <h2 className="flavour_header">Flavors of Our Cone</h2>
      <div className="flavour_cards">
        <div className="card">
          <img src={conefirst} alt="one" className="card_img" />
          <h3>ABC CONE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="price-container">
            <p className="price">Rs. 350</p>
            <button className="order_btn" onClick={()=>alert("Order received")}>ORDER NOW</button>
          </div>
        </div>

        <div className="card">
          <img src={conesec} alt="XYZ Cone" className="card_img" />
          <h3>XYZ CONE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="price-container">
            <p className="price">Rs. 250</p>
             <button className="order_btn" onClick={() => alert("Order received")}>ORDER NOW</button>
          </div>
        </div>

        <div className="card">
          <img src={cone3} alt="PQR Cone" className="card_img" />
          <h3>PQR CONE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="price-container">
            <p className="price">Rs. 300</p>
            <button className="order_btn" onClick={()=>alert("Order received")}>ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavours;