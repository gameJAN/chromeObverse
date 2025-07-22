import {createRoot} from 'react-dom/client'
import ErrorBoundary  from './ErrorBoundary'
import Main from './Main'
const App =()=>{
    return(
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <h1>Hello World</h1>
            <Main></Main>
        </ErrorBoundary>
    )
}
const domNode = document.getElementById('app');
const root  = createRoot(domNode)
root.render(<App/>)