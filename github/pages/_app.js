import App, {Container} from 'next/app'
import 'antd/dist/antd.css'
class MyApp extends App {
    static async getInitialProps({Component}) {
        const pageProps = await Component.getInitialProps()
        return {
            pageProps
        }
    }
    render(){
        const {Component} = this.props;
        console.log(Component);
        return (
            <Container>
                <Component {...pageProps}/>
            </Container>
        )
    }
}
export default App