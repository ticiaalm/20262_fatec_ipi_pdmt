import './styles.css'
import doc1 from './images/doc1.jpg'
const App = () => {
    const containerStyles = () => {
        return {width: 1280, margin: 'auto', border: '1px solid black', backgroundColor: "#EEE", borderRadius: 8, padding: 12, textAlign: 'center'};
    }
    const docNames = {doc1: 'Mariana Silva', doc2: 'Ana Santos', doc3: 'Cecília Morais'};
    return (
        <div style={containerStyles()}>
            <h2>Profissionais da saúde</h2>
            <div style={{margin: '8', border: '1px solid #ff1493', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <div className="Profissional">
                    <img src={doc1} />
                    <p>{docNames.doc1}</p>
                </div>
                <div className="Profissional">
                    <img src={"/doc2.jpg"} />
                    <p>{docNames.doc2}</p>
                </div>
                <div className="Profissional">
                    <img src='https://i0.wp.com/sanarmed.com/wp-content/uploads/2024/03/media-759.jpg?fit=1254%2C837&ssl=1' />
                    <p>{docNames.doc3}</p>
                </div>
            </div>
        </div>
    )
}

export default App