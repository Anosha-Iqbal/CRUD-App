import crudImage from '../images/crud_img.png'
const Home =() =>{
    const divstyle ={ display: "block" ,margin: "35px auto auto auto" ,width:"50%"}
    return(
        <div>
            <img src={crudImage}alt="" style = {divstyle} />
        </div>
    )
}
export default Home