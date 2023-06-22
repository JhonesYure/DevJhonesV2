import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

export default function Homepage()
{
    const [texto, setTexto] = useState('');
    const textoCompleto =
        'Muito além de projetar, desenvolver e gerenciar sites e App´s de alto impacto que geram leads, vendem produtos e contam histórias.';
    const duracaoAnimacao = 3000; // 3 segundos

    useEffect(() => {
        const intervalo = setInterval(() => {
        const novoTexto = textoCompleto.slice(0, texto.length + 1);
        setTexto(novoTexto);

        if (novoTexto === textoCompleto) {
            clearInterval(intervalo);
        }
        }, duracaoAnimacao / textoCompleto.length);

        return () => {
        clearInterval(intervalo);
        };
    }, []);
    return(
        <>
        <section id='homepage'>
            <main>
                <div className="container-fluid back">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <h1 className="titulo">
                                        Bem vindo ao meu site! <br/>
                                        sou <strong className="orange">Jhones Yure</strong>.| <br />
                                        Desenvolvedor BackEnd <br />
                                        FrontEnd & Mobile
                                    </h1>
                                </div>
                                <div>
                                    <p className="subtitulo">
                                        Muito além de projetar, desenvolver e gerenciar sites e App´s de <br />
                                        alto impacto que geram leads, vendem produtos e contam histórias.
                                    </p>
                                </div>
                                <div className="button">
                                    <button className='botao'>Contate-me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>


        <style jsx>
            {`
                .back {
                    background-image: url(./fundo.gif);
                    height: 100%;
                    width:100%;
                    background-repeat: no-repeat; 
                    background-size: cover;
                }
                .titulo {
                    color:#fff;
                    font-size: 50px;
                    margin-top: 15%;
                    font-weight: bold;
                }
                .orange {
                    color: #FB8500;
                }
                .subtitulo {
                    color: #fff;
                    font-weight: 600;
                }
                .botao{
                    background-color: #FB8500;
                    border-radius:10px;
                    color: #023047;
                    padding: 9px 20px ; 
                    width: 250px;
                    margin-top: 2%;
                    margin-bottom: 10%;
                    font-size: 25px;
                    font-weight: bold
                }
                .botao:hover {
                    cursor: pointer;
                    opacity:.9;
                    transition: all.3s ease;
                    background-color: #023047;
                    color: #FB8500;
                }
            `}
        </style>
        </>
    )
}