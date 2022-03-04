import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF MOBILE DEVELOPMENT */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND DEVELOPMENT*/}
      </div>
    </section>
  )
}

export default Services