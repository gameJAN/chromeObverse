function Greeting({name}){
    return(
        <>
           <h1>Hello : {name}</h1>
        </>
    )
}
// 手造错误
function Child(){
    let list = {}
    return(
        <>
        {list.map((item,key)=>{
            <span key={key}>{item}</span>
        })}
        </>
    )
}
function Main(){
    return(
        <>
            <Greeting name='world'></Greeting>
            <Greeting name='jan'></Greeting>
            <Child></Child>
        </>
    )
}

export default Main