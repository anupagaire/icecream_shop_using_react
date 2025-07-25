import '../css/style.css';
import bgImage from '../images/bg.png';   


const BgImag = () => {
    return (
      <div className="bg-image">
        <img src={bgImage} alt="Icecream Banner" />
        <div id='bg_image_content'>
          WELCOME!<br />We serve the best icecream in the city.<br/>
          <button id='button_content'>ORDER NOW</button>
        </div>
      </div>
    );
};
export default BgImag;