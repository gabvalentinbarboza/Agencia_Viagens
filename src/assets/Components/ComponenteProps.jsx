import style from './ComponenteProps.module.css'

function ComponenteProps({lugar, texto, bandeira }){
    return(
        <div className={style.corpo_texto}>
            <h2>Venha explorar esse lugar incrivel. Venha conhecer {lugar}</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="logo" />
        </div>

    )
}
export default ComponenteProps