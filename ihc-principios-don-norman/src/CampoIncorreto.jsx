import './style.css';

export default ({valor, setValor, id}) => {
    return(
        <div id="container">
            <div id="form">
                <h1>Title</h1>
                <div className='campo'>
                    <label htmlFor="">
                        Digite:
                    </label>
                    <input type="text"/>
                </div>
                <div className='campo'>
                    <label htmlFor="">
                        Digite:
                    </label>
                    <input type="text"/>
                </div>
                <div className='campo'>
                    <label htmlFor="">
                        Digite:
                    </label>
                    <input type="text"/>
                </div>
                <input type="submit" value="Enviar" />
            </div>
        </div>
    )
}