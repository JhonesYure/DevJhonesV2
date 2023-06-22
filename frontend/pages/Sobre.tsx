import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef  } from 'react';

export default function Sobre(){
    const [fadeIn, setFadeIn] = useState(false);
  const fotoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const fotoElement = fotoRef.current;

      if (fotoElement) {
        const fotoTop = fotoElement.getBoundingClientRect().top;

        if (fotoTop < window.innerHeight) {
          setFadeIn(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <>
            <main>
                <section id='sobre'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div ref={fotoRef} className={`imagem ${fadeIn ? 'fadeInLeft' : ''}`}>
                                <img src="../foto.jpg" alt="" className="foto" />
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12">
                            <div>
                                <h1 className="nome">
                                    Jhones Yure
                                </h1>
                            </div>
                            <div>
                                <p className="descricao">
                                    Desenvolvedor, empreendedor, estudante e <br />
                                    amante da tecnologia 
                                </p>
                            </div>
                            <div>
                                <p className="descricao">
                                    Estudante em bacharel de Ciência da computação, <br />
                                    formado em tecnólogo em desenvolvimento web,<br /> 
                                    mobile e UI/UX.
                                </p>
                            </div>
                            <div>
                                <p className="descricao">
                                    Em resumo, sou um desenvolvedor,<br />
                                    empreendedor, estudante e amante da tecnologia.
                                    Minha curiosidade, teimosia e vontade de  
                                    entender como a tecnologia funciona  
                                    impulsionaram minha jornada. Com minha 
                                    formação acadêmica em andamento, experiência  
                                    prática em desenvolvimento web, mobile e UI/UX,  
                                    e habilidades empreendedoras, estou pronto para 
                                    enfrentar desafios e criar soluções impactantes.
                                    Estou animado para continuar aprendendo, 
                                    crescendo e contribuindo para a comunidade tecnológica.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-12 linha-vertical">
                            <div>
                                <h3 className="certificado">
                                    Certificados
                                </h3>
                            </div>
                            <div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Técnico em desenvolvimento web & mobile</p>
                                </div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Segurança da Informação</p>
                                </div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Fundamentos de Hardware</p>
                                </div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Design UI/UX</p>
                                </div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Power BI</p>
                                </div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Design Gráfico em CorelDraw</p>
                                </div>
                                <div className="cert">
                                    <img src="./check.png" alt="" className="check" />
                                    <p className="cursos">Inglês Extremo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

            </main>

            <style jsx>
                {`
                
                .foto {
                    width: 100%;
                    height: 514px;
                    border-radius: 100px;
                    margin-top: 15%;
                    margin-bottom: 10%;
                    margin-left: 20%;
                    opacity: 0;
                    transform: translateX(-100%);
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                  }
                  @media (max-width: 720px){
                    .foto{
                        width: 300px;
                        margin-top: 50%;
                        float: left;
                    }
                  }
                  .imagem.fadeInLeft .foto {
                    opacity: 1;
                    transform: translateX(0);
                  }
                    .nome {
                        color: #FB8500;
                        font-size: 50px;
                        font-weight: bold;
                        margin-top: 13%;
                        margin-left: 15%;
                        margin-bottom: 5%;
                    }
                    .descricao {
                        color: #fff;
                        margin-left: 15%;
                    }
                    .linha-vertical {
                        border-left: 1px solid #FB8500;
                        height: 400px; 
                        margin-top: 10%
                    }
                    .certificado{
                        color: #FB8500;
                        font-weight: bold;
                        margin-left: 5%;
                    }
                    .cert {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        
                    }
                    .check {
                        width: 30px;
                        height: 30px;
                    }
                    .cert.fadeInLeft {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    .cursos {
                        color: #fff;
                        margin-top: 3%;
                        font-weight: 500;
                    }
                `}   
                      
            </style>
        </>
    )
}