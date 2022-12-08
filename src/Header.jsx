import {Link} from "react-router-dom"
const Header =()=>{
    return(
        <div className="menut">
            <Link to="inicio"> Presentacion</Link> &nbsp; &nbsp; &nbsp;
            <Link to="fin"> Pasatiempos </Link> &nbsp; &nbsp; &nbsp;
            <Link to="acerca"> Familia </Link> &nbsp; &nbsp; &nbsp;
            <Link to="redes">Redes Sociales</Link> &nbsp; &nbsp; &nbsp;
            <Link to="camara">WEB CAM</Link>

        </div>
        
    )
};
export default Header