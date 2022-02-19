import React, { useState, Fragment } from 'react'
import { useUser } from '../../contexts/User'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Chart } from "react-google-charts"
import './index.css'

import homem from '../../assets/homem.png'
import homem2 from '../../assets/homem2.png'
import mulher from '../../assets/mulher.png'
import mulher2 from '../../assets/mulher2.png'

export default function Home() {
    const [option, setOption] = useState(0)
    const { user } = useUser()
    const avatars = [homem, mulher, mulher2, homem2]
    const [ index, setIndex ] = useState(0)
    
    function handleImgClick(){
        if(index < 3) setIndex(index + 1)
        else setIndex(0)
    }

    return (
        <div className="home">
            <div className="header">
                <div className="avatar">
                    <img src={avatars[index]} onClick={() => handleImgClick()}/>
                    <strong>{user}</strong>
                </div>
            </div>
            <div className="options">
                <div className="column">
                    <p className="option" onClick={() => setOption(0)}>Pessoais</p>
                    <p className="option" onClick={() => setOption(1)}>Notas</p>
                    <p className="option" onClick={() => setOption(3)}>Grade Curricular</p>
                </div>
                <div className="column">
                    <p className="option" onClick={() => setOption(2)}>Aulas</p>
                    <p className="option" onClick={() => setOption(4)}>Desempenho Acadêmico</p>
                </div>
            </div>
            <div className="conteudos">
                <Conteudo option={option} />
            </div>
        </div>
    )
}


function Conteudo({ option }) {

    const [value, onChange] = useState(new Date())
    const data = [
        ["Matérias", "Desempenho", { role: "style" }],
        ["Humanas", 60, "#b87333"], // RGB value
        ["Engenharia", 75, "silver"], // English color name
        ["Elétrica", 70, "gold"],
        ["Programação", 92, "blue"], // CSS-style declaration
        
    ]

    function handleCalendarClick(date){

        const data = new Date(date)
        const aulaDia = [
            'Domingão não tem aula 😎', 
            'Aulas:\n -C012 (19:30 - 21:10)\n -C111 (21:30 - 23:10)',
            'Aulas:\n -C208 (21:30 - 23:10)',
            'Aulas:\n -C210 (21:30 - 23:10)',
            'Aulas:\n -S202 (19:30 - 21:10)\n -C012 (21:30 - 23:10)',
            'Aulas:\n -M109 (10:30 - 12:10)\n -C208 (13:30 - 15:10)',
            'Aulas:\n -X006'    
        ]
        alert(aulaDia[data.getDay()])
    }
    
    const obj = <>
        <div className="conteudo">
            <h2>Pessoais</h2>
            <div className="infos">
                <p>Nome: <strong>Ítalo</strong></p>
                <p>Matrícula: <strong>1564</strong></p>
                <p>E-mail: <strong>italo.rezende@gec.inatel.br</strong></p>
                <p>Período: <strong>7°</strong></p>
                <p>Aulas cadastradas: <strong>6</strong></p>
                <p>Documento em dia: <strong>Sim</strong></p>
                <p>Dividas na biblioteca: <strong>Não</strong></p>
                <p>Curso: <strong>Engenharia de computação</strong></p>
                <p>Horas de AC: <strong>72 horas</strong></p>
            </div>
        </div>
    </>


    const obj1 = <>
        <div className="conteudo">
            <h2>Notas</h2>
            <div className="notas">
                <div className="row">
                    <Nota sigla="C012" materia="Sistemas Operacionais" nota={70} />
                    <Nota sigla="C111" materia="Análise de Dados" nota={75} />
                    <Nota sigla="C208" materia="Arquitetura de Computadores" nota={80} />
                </div>
                <div className="row">
                    <Nota sigla="C210" materia="Inteligência Computacional" nota={60} />
                    <Nota sigla="M109" materia="Estatística" nota={92} />
                    <Nota sigla="S202" materia="Banco de Dados II" nota={70} />
                </div>
            </div>
        </div>
    </>

    const obj2 = <>
        <div className="conteudo">
            <h2>Aulas</h2>
            <div className="notas">
                <div className="row">
                    <Aula sigla='C012' materia="Sistemas Operacionais" descricao="Conceituação de sistemas operacionais. Aspectos básicos do projeto de sistemas operacionais." />
                    <Aula sigla='C201' materia="Introdução à Engenharia" descricao="Introdução aos conceitos básicos e às aplicações de engenharia." />
                    <Aula sigla='C204' materia="Algoritmos e Estruturas de Dados III" descricao="Análise e projeto de algoritmos avançados" />
                </div>
                <div className="row">
                    <Aula sigla='C206' materia="Programação Orientada a Objetos" descricao="Conceitos, terminologia e aplicação da abordagem de programação orientada a objetos." />
                    <Aula sigla='C207' materia="Banco de Dados" descricao="Conceituação e projeto de bancos de dados. " />
                    <Aula sigla='C111' materia="Análise de Dados" descricao="Coleta, preparação, análise e visualização de dados. Ferramentas." />
                </div>
            </div>
        </div>
    </>

    const obj3 = <>
        <div className="conteudo">
            <h2>Grade Curricular</h2>
            <div className="infos">
                <Calendar onChange={onChange} value={value} onClickDay={handleCalendarClick}/>
            </div>
        </div>
    </>

    const obj4 = <>
        <div className="conteudo-chart">
            <h2>Desempenho Acadêmico</h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
    </>

    const array = [
        obj, obj1, obj2, obj3, obj4
    ]

    return array[option]
}


function Nota({ materia, sigla, nota }) {

    return (
        <table className='nota table'>
            <tr className='tr'>
                <th className='th'>Matéria</th>
                <th className='th'>Nota</th>
            </tr>
            <tr className='tr'>
                <td className='td-1'>{sigla} - {materia}</td>
                <td className='td-2'>{nota}</td>
            </tr>
        </table>
    )
}

function Aula({ sigla, materia, descricao }) {
    return (
        <>
            <div className='aula'>
                {sigla} - {materia}
            </div>
            <div className='descricao'>{descricao}</div>
        </>
    )
}