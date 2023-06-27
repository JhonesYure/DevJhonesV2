import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function MeuTrabalho()
{

    return(
        <>
        <main>
            <section id="trabalho">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="titulo">
                                O que dizem sobre meu trabalho 
                            </h1>
                            <p className="info">
                                Veja alguns depoimentos de clientes, colegas e amigos
                            </p>
                        </div>

                        <div className="card col-md-3">
                          <div className="row">
                            <div className="col-md-6">
                              <img src="/yogi.jpeg" alt="" className="photo" />
                              <h3 className="nome">Luis Fernando</h3>
                              <p className="profile">Designer UI/UX</p>
                              
                            </div>
                            <div className="col-md-6">
                              <h3 className="dep-title">
                                Produtivo e <br />
                                Competente
                              </h3>
                              <p className="dep">
                              "Se você procura qualidade e comprometimento, 
                              com certeza encontrou! O Jhones é um profissional 
                              incrivel e responsável, sempre pensando nas melhores 
                              tecnologias e formas de aplicação no projeto. 
                              Encontrando sempre as melhores soluções para cada caso, 
                              com certeza indicaria para todos os projetos"
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 star">
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                              </div>
                        </div>

                        <div className="card col-md-3">
                          <div className="row">
                            <div className="col-md-6">
                              <img src="/yogi.jpeg" alt="" className="photo" />
                              <h3 className="nome">Luis Fernando</h3>
                              <p className="profile">Designer UI/UX</p>
                              
                            </div>
                            <div className="col-md-6">
                              <h3 className="dep-title">
                                Produtivo e <br />
                                Competente
                              </h3>
                              <p className="dep">
                              "Se você procura qualidade e comprometimento, 
                              com certeza encontrou! O Jhones é um profissional 
                              incrivel e responsável, sempre pensando nas melhores 
                              tecnologias e formas de aplicação no projeto. 
                              Encontrando sempre as melhores soluções para cada caso, 
                              com certeza indicaria para todos os projetos"
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 star">
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                              </div>
                        </div>

                        <div className="card col-md-3">
                          <div className="row">
                            <div className="col-md-6">
                              <img src="/yogi.jpeg" alt="" className="photo" />
                              <h3 className="nome">Luis Fernando</h3>
                              <p className="profile">Designer UI/UX</p>
                              
                            </div>
                            <div className="col-md-6">
                              <h3 className="dep-title">
                                Produtivo e <br />
                                Competente
                              </h3>
                              <p className="dep">
                              "Se você procura qualidade e comprometimento, 
                              com certeza encontrou! O Jhones é um profissional 
                              incrivel e responsável, sempre pensando nas melhores 
                              tecnologias e formas de aplicação no projeto. 
                              Encontrando sempre as melhores soluções para cada caso, 
                              com certeza indicaria para todos os projetos"
                              </p>
                            </div>
                          </div>
                          <div className="col-md-12 star">
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                                <img src="star.png" alt="" className="inline-image" />
                              </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <style jsx>
          {`
                .titulo {
                   color: #fff;
                   font-size:50px;
                   font-weight: bold;
                   text-align: center;
                   margin-top: 10%;
                }
                .info {
                    color: #58B4D1;
                    text-align: center;
                    margin-top: 3%;
                    font-weight: 500;
                }
                @media (max-width: 767px)
                {
                  .card{
                    width: 400px;
                    display: flex;
                    align-items: center;
                  }
                }
                .card {
                  background-color: #023047;
                  /* display: flex; */
                  /* align-items: center; */
                  border: 3px solid #58B4D1;
                  border-radius: 30px; 
                  padding: 20px;
                  margin-top: 5%;
                  margin-bottom: 10px;
                  margin-left: 5%;
                }
                .photo {
                  border-radius: 100px;
                  width: 150px;
                  margin-left: 5%;
                  margin-top: 5%;
                }
                .nome {
                  color: #fff;
                  margin-top: 10%;
                }
                .profile {
                  color: #58B4D1;
                  font-weight: 500;
                }
                .dep {
                  color: #fff;
                  font-size: 15px;
                  font-style: italic;
                }
                .dep-title {
                  color: #fff;
                  font-weigth: 500;
                }
                .star {
                  margin-bottom: 0%;
                }
          `}
        </style>
        </>
    )
}