import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { CountUp } from 'use-count-up'

export default function Contador() {


  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-3 text-center" id="contador">
              {/* <h1 className="numero">+4.000</h1> */}
              <div className="contador">
              <span className="plus">+</span>
              <CountUp isCounting end={4000} duration={10}/>
              </div>
              <p className="horas">
                Horas de experiência em desenvolvimento web e mobile
              </p>
            </div>

            <div className="col-md-3 text-center" id="contador">
            <div className="contador">
              <span className="plus">+</span>
              <CountUp isCounting end={15} duration={10}/>
              </div>
              <p className="horas">
               Certificados em cursos
              </p>
            </div>

            <div className="col-md-3 text-center" id="contador">
            <div className="contador">
              <span className="plus">+</span>
              <CountUp isCounting end={10} duration={10}/>
              </div>
              <p className="horas">
                Projetos realizados
              </p>
            </div>

            <div className="col-md-3 text-center" id="contador">
            <div className="contador">              
              <CountUp isCounting end={100} duration={10}/>
              <span className="plus">%</span>
              </div>
              <p className="horas">
                Satisfação de clientes
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>
        {`
            .numero, .contador {
                font-size: 80px;
                color: #58B4D1;
                margin-top: 20%;
               
            }
            .horas {
                font-size: 25px;
                color : #FFB703 ;
            }
        `}
      </style>
    </>
  );
}
