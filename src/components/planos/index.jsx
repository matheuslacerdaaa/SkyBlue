import './index.scss'


export default function Planos() {

    return (

        <section id='planos'>


            <div className="text">

                <div className="titulo">
                    <h1>Planos para Você!!</h1>
                    <hr />
                </div>
            </div>

            <div className="main">

                <div className="card1">

                    <div className="titulo">
                        <div className="titulo-principal">
                            <h1>Plano Mês!!</h1>
                        </div>

                        <div className="subtitulo">
                            <p>Perfeito para pequenas empresas e autônomos</p>
                            <hr />
                        </div>
                    </div>

                    <div className="mae">

                        <div className="valor">
                            <h1>R$500<span>/mês</span></h1>
                        </div>

                        <div className="subtitulo-valor">
                            <p>Gerenciamento automatizado por 30 dias</p>
                        </div>

                        <div className="topicos">

                            <ul>
                                <li>Otimização de tempo</li>
                                <li>Assistência ao Cliente</li>
                                <li>Proteção de Dados </li>
                            </ul>
                        </div>



                    </div>

                    <div className="btn">
                        <a href="https://wa.me/5511993296044?text=Olá%2C%20queria%20saber%20mais%20informações%20a%20respeito%20do%20plano%20mensal">Contato</a>
                    </div>



                </div>

                <div className="card1">

                    <div className="titulo">
                        <div className='azul'>50%</div>

                        <div className="titulo-principal">
                            <h1>Plano Ano!!</h1>
                        </div>


                        <div className="subtitulo">
                            <p>Perfeito para pequenas empresas e autônomos</p>
                            <hr />
                        </div>
                    </div>

                    <div className="mae">

                        <div className="valor">
                            <h1>R$3500<span>/ano</span></h1>
                        </div>

                        <div className="subtitulo-valor">
                            <p>Gerenciamento automatizado por 365 dias</p>
                        </div>

                        <div className="topicos">

                            <ul>
                                <li>Otimização de tempo</li>
                                <li>Assistência ao Cliente</li>
                                <li>Proteção de Dados </li>
                            </ul>

                        </div>



                    </div>

                    <div className="btn">
                        <a href="https://wa.me/5511993296044?text=Olá%2C%20queria%20saber%20mais%20informações%20a%20respeito%20do%20plano%20anual">Contato</a>
                    </div>



                </div>




            </div>



        </section>



    )



}