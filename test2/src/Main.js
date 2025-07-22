function Greeting({name}){
    return(
        <>
           <h1>Hello : {name}</h1>
        </>
    )
}

function Main(){
    return(
        <>
            <Greeting name='world'></Greeting>
            <Greeting name='jan'></Greeting>
        </>
    )
}

export default Main