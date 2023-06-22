import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Header.module.css';
import React from 'react';

export default function Header()
{
  return(
    <>
      <main>
      <div className="container-fluid lista">
        <div className="row">

          <div className="col-md-8 col-2">
            <a href="">
              <img src="/instablack.png" alt="" className="insta" />
            </a>
          </div>

          <div className="col-md-2 col-2">
            <div className='line'>
              <img src="./telefone.png" alt="" className="tel" />
              <p className="numero">(51) 994 119 063</p>
            </div>
          </div>

          <div className="col-md-2 col-2">
            <div className='line'>
              <img src="./email.png" alt="" className="tel" />
              <p className="numero">devjhones@outlook.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
        <Navbar expand="lg" style={{backgroundColor: "#023047", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",}}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <div className="col-md-5">
              <Nav className="me-auto">
                <Nav.Link href="#portfolio">
                  <p className="txt-header">Portfólio</p>
                </Nav.Link>
                <Nav.Link href="#sobre">
                  <p className="txt-header">Sobre</p>
                </Nav.Link>
              </Nav>
              </div>

              <div className="col-md-4 divlogo">
                <Navbar.Brand href="#home">
                  <img src="./logo.png" alt="" className="logo" />
                </Navbar.Brand>
              </div>

              <div className="col-md-1">
              <Nav className="me-auto">
              <Nav.Link href="#skills">
                  <p className="txt-header">Tecnologias</p>
                </Nav.Link>
                <Nav.Link href="#contato">
                  <p className="txt-header">Contato</p>
                </Nav.Link>
              </Nav>
              </div>
            </Navbar.Collapse>
            
          </Container>
          
        </Navbar>
        </div>
      </div>
      </main>


      <style jsx>
        {`
        @media (max-width: 720px){
          .lista {
            display: none;
          }
          .logo {
            display: none;
          }
        }
        .txt-header{
          color: #fff;
          font-weight: bold;
          font-size: 25px;
          margin-left: 5%;
        }
        .txt-header:hover {
          color: #219EBC;
        }
        .txt-header:hover::before{
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: #219EBC;
            animation: linha-animada 1s ease-in forwards;
        }
        @keyframes linha-animada {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
          .lista {
            background: #219EBC;
            height: 35px;
          }
          .insta {
            margin-left: 15%;
            margin-top: 1.5%;
          }
          .tel {
            width: 20px;
            margin-left: 0%;
          }
          .numero {
            color: #fff;
            margin-top: 4%;
            margin-left: 5%;
          }
          .line {
            display: flex;
            align-items: center; 
          }
          .logo{
            width: 250px;
            margin-top: 5%;
          }
          .divlogo
          {
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}