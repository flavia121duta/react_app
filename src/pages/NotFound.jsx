const NotFound = () => {
    return <div className="centered" style={{display: "block"}}>
        <h1>Page Not Found!</h1> 
        <br/>
        <img src={require('../assets/panda.gif')} alt="loading..." style={{width: "20%", height: "auto"}}/>
    </div>
}

export default NotFound;