import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skills()
{
    return(
        <>
        <main>
            <section id='skills'>
                <div className="container seta">
                   <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h1 className="skills">Minhas Habilidades</h1>
                            </div>
                            <div>
                                <p className="descricao">
                                Sempre possui uma habilidade de simplificar as situações mais complexas.
                                Estas habilidades são colocadas em prova aprendendo muitas linguagens de 
                                programação, como, C#, JAVA, HTML, CSS, REACT e muitas outras mais. Além de 
                                tecnologias como WordPress, Figma e outras que expandem meus conhecimentos 
                                em tecnologia e Desing.
                                </p>
                            </div>
                            <div className=''>
                                <div>
                                    <p className="dev">
                                        Desenvolvimento BackEnd
                                    </p>
                                    <p className="porcentagem">80%</p>
                                </div>
                                <ProgressBar variant="info" animated now={85} />;
                            </div>
                            <div className=''>
                                <div>
                                    <p className="dev">
                                        Desenvolvimento FrontEnd
                                    </p>
                                    <p className="porcentagem">75%</p>
                                </div>
                                <ProgressBar  variant="info" animated now={75} />;
                            </div>
                            <div className=''>
                                <div>
                                    <p className="dev">
                                        Desenvolvimento Mobile
                                    </p>
                                    <p className="porcentagem">75%</p>
                                </div>
                                <ProgressBar  variant="info" animated now={75} />;
                            </div>
                            <div className=''>
                                <div>
                                    <p className="dev">
                                        Desing
                                    </p>
                                    <p className="porcentagem">65%</p>
                                </div>
                                <ProgressBar  variant="info" animated now={65} />;
                            </div>
                            <div className=''>
                                <div>
                                    <p className="dev">
                                        DevOps
                                    </p>
                                    <p className="porcentagem">50%</p>
                                </div>
                                <ProgressBar  variant="info" animated now={50} />;
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div>
                                <img src="./skills.png" alt="" className="foto" />
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </main>


        <style jsx>
            {`
                .seta {
                    border-top: 3px solid #FB8500;
                    widht: 100%; 
                    margin-top: 10%
                }
                .skills {
                    font-size: 50px;
                    color: #fff;
                    margin-top:5%;
                    font-weight: bold;
                }
                .descricao {
                    color: #fff;
                    font-weight: 500;
                    margin-top: 2%;
                }
                .foto {
                    width: 100%;
                    height: 100%;
                    margin-top: 15%;
                    margin-bottom: 5%;
                    object-fit: cover;
                    border-radius: 30px;                    
                }
                .dev {
                    color: #fff;
                    float:left;
                    font-weight: bold;
                }
                .porcentagem {
                    color: #58B4D1;
                    font-weight: bold;
                    margin-left: 85%;
                }
            `}
        </style>
        </>
    )
}