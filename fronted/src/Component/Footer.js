import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <section className='footer'>
  <footer className='bg-light text-danger text-center'>
    <div className='container p-4'>
      <div class="row">
        <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
          <h5 className='text-uppercase text-danger'>Sobre Nosotros</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </div>

        <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
          <h5 className='text-uppercase text-danger'>CONTACT</h5>

          <ul className='list-unstyled mb-0'>
            <li >
            <i className='fas fa-home me-3 text-secondary'></i>
              <a href="#!" className='text-danger'>Email</a>
            </li>
            <li>
              <a href="#!" className='text-danger'>Telefono</a>
            </li>
          </ul>
        </div>

        <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
          <h5 className='text-uppercase mb-0 text-danger'>SOCIALMEDIA</h5>

          <ul className='list-unstyled'>
            <li>
            <a href="#!" className='text-danger'>Instagram</a>
              <i class="fas fa-camera fa-xs"></i>
              
            </li>
            <li>
              <a href="#!" className='text-danger'>Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='text-center p-3'>
      © 2020 Copyright:
      <Link className='text-danger' to="https://mdbootstrap.com/">MDBootstrap.com</Link>
    </div>
  </footer>
 
</section>
	);
	}
