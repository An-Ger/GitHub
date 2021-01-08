import  { withRouter } from 'next/router'
import Link from 'next/link'
import Comp from '../components/comp'

const A = ({router, name}) => <Link href="#aaa"><a>A{router.query.id}{name}</a></Link>
A.getInitialProps = () => {
    return {
        name: 'jocky'
    }
}
export default withRouter(A)