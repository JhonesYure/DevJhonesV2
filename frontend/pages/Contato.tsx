import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contato()
{
    return(
        <>
        <main>
           <section id="contato">
           <div className="container">
                <div className="row">
                    <div>
                        <h1 className="gostou">
                            Gostou do que viu até aqui?
                        </h1>
                        <p className="contato">
                            Seja qual for seu projeto ou ideia, entre em contato, ficarei deliz com seu retorno
                        </p>
                    </div>

                    <div className="col-md-5">
                        <div className="form">
                            <p className="label">
                                Nome
                            </p>
                            <input type="text"  className="text"/>
                        </div>
                        <div>
                            <p className="label">
                                E-mail
                            </p>
                            <input type="text"  className="text"/>
                        </div>
                        <div>
                            <p className="label">
                                Mensagem
                            </p>
                            <textarea className="text-area"/>
                        </div>
                        <button className="enviar">Enviar Mensagem</button>
                    </div>

                    <div className="col-md-6">
                        <img src="/contato.png" alt="" className="img-contato" />
                    </div>
                </div>
            </div>
           </section>

        </main>

        <style jsx>
            {`
                .gostou {
                    text-align:center;
                    margin-top: 7%;
                    color: #fff;
                    font-weight: bold;
                    font-size: 60px;
                }
                .contato {
                    color: #58B4D1;
                    text-align: center;
                    margin-top: 2%;

                }
                .form {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .label {
                    color: #58B4D1;
                    font-size:30px;
                    font-weight: 500;
                    margin-top: 5%;
                    margin-right: 5px;
                }
                .text {
                    margin-top: 0;
                    border-color: #58B4D1;
                    background-color: #023047;
                    color: #58B4D1;
                    font-weight: 500;
                    width: 100%;
                    height: 50px;
                }
                .text-area {
                    margin-top: 0;
                    border-color: #58B4D1;
                    background-color: #023047;
                    color: #58B4D1;
                    font-weight: 500;
                    width: 100%;
                    height: 250px;
                }
                .enviar {
                    background-color: #58B4D1;
                    width: 100%;
                    color: #FB8500;
                    font-size: 25px;
                    font-weight: bold;
                    border-color: #58B4D1;
                    margin-bottom: 0%;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                .enviar:hover {
                    background-color: #023047;
                    color : FB8500;
                }
                .img-contato {
                    margin-left: 40%;
                    margin-top: 20%;
                    width: 450px;
                }
                @media (max-width: 767px)
                {
                  .img-contato {
                    display: none;
                  }
                }
            `}
        </style>
        </>
    )
}