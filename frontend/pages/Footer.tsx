import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer()
{
    return(
        <>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <a href="">
                            <img src="/logo.png" alt="" className="logo" />
                        </a>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="desc">
                            <img src="/emailblue.png" alt="" className="info" />
                            <p className="cont">devjhones@outlook.com</p>
                        </div>
                        <div className="desc">
                            <img src="/telblue.png" alt="" className="info" />
                            <p className="cont">(51) 9.9411-9063</p>
                        </div>
                    </div>

                    <div className="col-md-5 col-12">
                        <div className="redes">
                            <a href="https://www.instagram.com/jhonesyure/" target="blank">
                                <img src="/instaB.png" alt="" className="insta" />
                            </a>
                            <a href="https://github.com/JhonesYure" target="blank">
                                <img src="/github.png" alt="" className="rede" />
                            </a>
                            <a href="https://www.linkedin.com/in/devjhones/" target="blank">
                                <img src="/linkedin.png" alt="" className="rede" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="copy">
                            © 2023 Criado por Desenvolvedor Jhones Yure
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <style jsx>
            {`
            .container{
                border-top: 1px solid #FB8500;
                widht: 100%; 
                margin-top: 5%
            }
            .logo{
                width: 100%;
                margin-top: 10%;
            }
            .desc {
                display: flex;
                align-items: center;
                
            }
            .info {
                margin-left: 50%;
                margin-top: 10%;
            }
            .cont {
                color: #FB8500;
                margin-top: 15%;
                margin-left: 5%;
                font-weight: bold; 
            }
            @media (max-width: 767px){
                .info {
                    margin-left: 5%;
                }   
                .redes {
                    display: flex;
                    align-items: center;
                }
                .insta  {
                    width: 40px;
                }
            }
            .insta {
                margin-left: 40%;
                margin-top: 10%;
                width: 40px;
            }
            .rede{ 
                margin-left: 10%;
                width: 50px;
                margin-top: 10%;
            }
            .copy {
                color: gray;
                text-align: center;
                margin-top: 5%;
            }
            `}
        </style>
        </>
    )
}