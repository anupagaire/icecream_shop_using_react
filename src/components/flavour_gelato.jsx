import '../css/style.css';
import gelato1 from '../images/gelato1.png';
import gelato2 from '../images/gelato2.png';
import gelato3 from '../images/gelato3.png';



const Flavoursgelato = () => {
  return (
    <div className="flavours">
      <h2 className="flavour_header">Flavors of Our Gelato</h2>
      <div className="flavour_cards">
        <div className="card">
          <img src={gelato1} alt="one" className="card_img" />
          <h3>ABC CONE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="price-container">
            <p className="price">Rs. 350</p>
            <button className="order_btn" onClick={()=>alert("Order received")}>ORDER NOW</button>
          </div>
        </div>

        <div className="card">
          <img src={gelato2} alt="XYZ Cone" className="card_img" />
          <h3>XYZ CONE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="price-container">
            <p className="price">Rs. 250</p>
            <button className="order_btn" onClick={()=>alert("Order received")}>ORDER NOW</button>
          </div>
        </div>

        <div className="card">
          <img src={gelato3} alt="PQR Cone" className="card_img" />
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

export default Flavoursgelato;