import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = dynamic(() => import('react-responsive-carousel').then((module) => module.Carousel), {
  ssr: false,
});

export default function Projetos() {
  return (
    <>
      <main>
        <section id="projetos">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="title">Principais Projetos</h1>
              </div>

              <div className="">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  emulateTouch
                  swipeable
                  showArrows={false}
                  showIndicators={false}
                  centerMode
                  centerSlidePercentage={33.33}
                  renderArrowPrev={() => <></>}
                  renderArrowNext={() => <></>}
                >
                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./web.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>StarCode Digital</h3>
                    <p className="info">
                        O site oferece uma interface de <br />
                        fácil navegação, solicitar serviço, <br />
                        criação de sites, Apps, <br />
                        Data Analystc e mais
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong> PHP, HTML, CSS,JavaScript, MySQL, Figma</strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite o site</button>
                    </div>
                  </div>

                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./web.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>Vent Digital</h3>
                    <p className="info">
                        Um site institucional para divulgar <br />
                         seus serviços, como, BI & <br />
                         Analystics, KPIs, Dicovery e mais.
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong> ReactJs, HTML, CSS, JavaScript, NextJs, AWS, Figma </strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite o site</button>
                    </div>
                  </div>

                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./mobile.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>Lotus Weet</h3>
                    <p className="info">
                        Aplicativo de envio de tarefas, <br />
                        ligações com API, notificações e <br />
                        interação em tempo real.
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong> React Native, C#, MVC, MySQL, Frameworks, Figma</strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite</button>
                    </div>
                  </div>

                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./web.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>Biblioteca</h3>
                    <p className="info">
                        O site oferece uma interface de <br />
                        fácil navegação, cadastro de livros, <br />
                        data de entrega banco de dados e mais<br />                        
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong>C#, MVC, HTML, CSS, JavaScript, MySQL, Figma</strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite</button>
                    </div>
                  </div>

                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./mobile.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>Imobi App</h3>
                    <p className="info">
                        Aplicativo de imobliaria <br />
                        cadastro de imoveis, CRUD, <br />
                        agendar visita e horario<br />
                        dados em nuvem e mais
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong> Expo, JavaScript, SqlLite, Figma</strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite o site</button>
                    </div>
                  </div>

                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./web.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>Aware</h3>
                    <p className="info">
                        O site oferece uma interface de <br />
                        fácil navegação, solicitar serviço, <br />
                        criação de sites, design, <br />
                        marketing e mais
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong> C#, MVC, HTML, CSS,JavaScript,  Figma</strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite o site</button>
                    </div>
                  </div>

                  <div className="card col-md-11 col-sm-12">
                    <div className="cent">
                        <img src="./mobile.png" alt="" className="iconImage" />
                    </div>
                    <h3 className='nome'>Sirena Cosmédicos</h3>
                    <p className="info">
                        Aplicativo de fácil navegação <br />
                        cupom de descontos, CRUD <br />
                        filtros para camera <br />
                        produtos e mais
                    </p>
                    <p className="tech">
                    Tecnologias usadas: <br />
                   <strong> C#, MVC, ReactNative, JavaScript, Figma</strong>
                    </p>
                    <div className="cent">
                    <button className='botao'>Visite</button>
                    </div>
                  </div>

                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>
        {`
          .title {
            color: #fff;
            font-size: 80px;
            text-align: center;
            margin-top: 15%;
          }

          .card {
            margin: 0 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            background-color: #8ECAE6;
            margin-top: 20%;
            margin-bottom: 10%;
            border-radius: 20px;
          }
          .cent {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5%;
          }
          .iconImage {
            width: 58px !important;
            height: 58px;
            
          }
          .nome {
            color : #023047;
            font-size: 40px;
            font-weight: bold;
            margin-top: 5%;
          }
          .info, .tech {
            display: inline-block; 
            text-align: left;
            margin-left: 11%;
          }
          .botao {
            background-color: #023047;
            color: #FB8500;
            font-size: 30px;
            border-radius: 50px;
            font-weight: bold;
            margin-top: 2%;
            margin-bottom: 10%;
            width: 50%; 
            height: 20%;
            margin-left
          }
          .botao:hover {
            cursor: pointer;
            background-color: #FB8500;
            color: #023047;
          }
        `}
      </style>
    </>
  );
}
