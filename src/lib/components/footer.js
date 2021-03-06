import React from 'react'
import '../style/footer.css'
import '../assets/icons/style.css'
import logo from '../assets/images/pagoefectivo.png'

const Footer = () => (
  <div className="container footer">
    <div className="row">
      <div className="col-12 col-md-4 space row d-flex justify-content-center ">
        <div className="col-6 text-right align-self-center">
          <span>Instrucciones vía </span>
        </div>
        <div className="col-6 text-left">
          <a target="_blank" href="https://drive.google.com/open?id=0BxjZ1Oi4hxZRbWRtdmRMdm1obnBIZVBoV2FDNU51VzgzeEpj"><i className="icon-printer"></i></a>
        </div>
      </div>
      <div className="col-6 col-md-4 space  align-self-center text-center">
        <span>Ayuda: <a href="mailto:contacto@redbus.pe" className="email"><span>contacto@redbus.pe</span></a></span>
      </div>
      <div className="col-6 col-md-4 space row d-flex justify-content-center ">
        <div className="col-6 text-right align-self-center">
          <span>Pago vía</span>
        </div>
        <div className="col-6 align-self-center">
          <a href=""><img className="img-fluid" src={logo} alt="logo"/></a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
