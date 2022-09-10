import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../../components /QuestionCard';
import Button from '../../components / Button ';
import bien from '../../assets/bien.png';
import maso from '../../assets/medio.png';
import mal from '../../assets/mal.png';

const API_URL= "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"

function Game () {
    const [ loading, setLoading ] = useState(true);
    const [ questions, setQuestions ] = useState([]);
    const [ selectedAnswers, setSelectedAnswers ] = useState([]);
    const [ result, setResult] = useState(0);
    const [ mostrarResultado, setMostrarResultado ] = useState(false);

    function calcularResultado() {
        console.log('Hello')
        console.log(selectedAnswers)
        const respuestasCorrectas = selectedAnswers.filter((respuesta) => respuesta.valorOpcion === true)
        console.log(respuestasCorrectas.length)
        setResult(respuestasCorrectas.length)
        setMostrarResultado(true)
    }

    useEffect(() => {
       fetch(API_URL)
       .then(response => response.json())
       .then(data => setQuestions(data))
       .catch(error => console.log(error))
       .finally(() => setLoading(false))
    }, [])

    return (
        
    
        <div className="container">
            <section className="section">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>
                </nav>
                {
                    loading &&
                        <div>Cargando...</div>  
                    
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((pregunta) => {
                return <QuestionCard 
                key={pregunta.id} 
                preguntaActual={pregunta} 
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
                mostrarResultado={mostrarResultado}
                 />
                                        
                                })
                            }
                        </form>
                        
                    )
                }
                <div className='level'>
                <div className='level-left'>
                { 
                    mostrarResultado &&
                    <>
                        <p>{result}/{`${questions.length}`}</p>
                    {result <4 && <img src={mal} /> }
                    {result >= 4 && result <7 && <img src={maso} /> }
                    {result >= 7 && <img src={bien} /> }

                    </>
                    }
                </div>

                <div className='level-right'>
                    <Button onClick={() => calcularResultado()} text='Enviar'></Button>   
                </div>
                </div>
                
            </section>
        </div>

    )
}

export default Game;

