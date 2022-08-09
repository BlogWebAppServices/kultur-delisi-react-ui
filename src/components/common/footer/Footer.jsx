import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../logowhite.png' alt='' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, laudantium enim! A, aliquid harum reiciendis qui illum aliquam rerum veritatis quidem error quas omnis facilis ea deserunt tenetur libero sequi.
            Aliquid illo distinctio fugiat quibusdam assumenda exercitationem quam facere nobis ab excepturi labore reprehenderit neque, quo ipsam ratione tempora. Quis cum inventore possimus, nostrum iusto doloribus ab harum numquam sit.</p>
          </div>
          <div className='box box-center'>
             <h3>Sosyal Medya</h3>
             <ul className="social">
              <li className="social-link">
                <i className="fa-brands fa-facebook "></i>
              </li>
              <li className="social-link">
              <i className="fa-brands fa-twitter "></i>
              </li>
              <li className="social-link">
              <i className="fa-brands fa-linkedin "></i>
              </li>
              <li className="social-link">
              <i className="fa-brands fa-instagram "></i>
              </li>
            </ul>
           
            <ul className="footer-links">
              <li><a href="/about" >Hakkında</a></li>
              <li><a href="/contact" >İletişim</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <div className='container flexSB'>
          <span><a href="/" className="siteLink">kulturdelisi.com </a>© tüm hakları saklıdır.</span>
          {/* <p>
            made with <i className='fa fa-heart'></i> by Egemen Halil ALTAŞ <i className="fa-solid fa-face-smile smile"></i>
          </p> */}
        </div>
      </div>
    </>
  )
}

export default Footer
