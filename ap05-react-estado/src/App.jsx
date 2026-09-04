import React from 'react'
import EstacaoClimatica from './EstacaoClimatica'
class App extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
    }
    componentDidMount() {
        // this.obterLocalizacao()
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className='container border mt-2 py-3'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-8'>
                        {
                            this.state.mensagemDeErro ?
                                <p className='border rounded p-2 fs-1 text-center'>
                                    É preciso dar permissão para acesso à localização. Atualize a página e tente novamente, ajustando a configuração do seu navegador.
                                </p>
                            :
                            <EstacaoClimatica 
                                icone={this.state.icone}
                                estacao={this.state.estacao}
                                latitude={this.state.latitude}
                                longitude={this.state.longitude}
                                data={this.state.data}
                                mensagemDeErro={this.state.mensagemDeErro}
                                obterLocalizacao={this.obterLocalizacao}
                                raiz={this.props.raiz}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        /* 21/06 - início do inverno */
        const d1 = new Date(anoAtual, 5, 21)
        /* 24/09 - início da primavera */
        const d2 = new Date(anoAtual, 8, 24)
        /* 22/12 - início do verão */
        const d3 = new Date(anoAtual, 11, 22)
        /* 21/03 - início do outono */
        const d4 = new Date(anoAtual, 2, 21)
        const sul = latitude < 0
        if (data >= d1 && data < d2) {
            return sul ? 'Inverno' : 'Verão'
        }
        if (data >= d2 && data < d3) {
            return sul ? 'Primavera' : 'Outono'
        }
        if (data >= d3 || data < d4) {
            return sul ? 'Verão' : 'Inverno'
        }
        return sul ? 'Outono' : 'Primavera'
    }
    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-umbrella-beach',
        'Outono': 'fa-tree',
        'Inverno': 'fa-snowman'
    }
    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const data = new Date()
                const estacao = this.obterEstacao(data, position.coords.latitude)
                const icone = this.icones[estacao]
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    estacao: estacao,
                    data: data.toLocaleDateString(),
                    icone: icone
                })
            },
            (erro) => {
                console.log(`Erro: ${erro}`)
                this.setState({
                    mensagemDeErro: 'Tente novamente mais tarde'
                })
            }
        )
    }
}
export default App