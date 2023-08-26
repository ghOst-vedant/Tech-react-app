import React from "react";
import vg from "../assets/techTree.png";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech</h1>
          <p>Get All Tech News Here!</p>
        </main>
      </div>

      <div className="home2" id="home2">
        <img src={vg} alt="Graphics"/>
        <div>
          <p>
            The Perfect Tech news web-app! where you find all the important tech
            news at your finger tips. Get all the leading news and stay ahead.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, minus necessitatibus. Recusandae amet inventore quidem? Ducimus quasi pariatur odit iure modi dignissimos quisquam minima! Dolores temporibus perspiciatis recusandae, molestiae architecto, modi, inventore ducimus nobis ad fugit soluta doloremque! Accusantium sed dolorem, commodi beatae natus amet maiores et! Nam, atque quos!</p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"1s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
