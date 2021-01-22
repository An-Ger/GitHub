import { withRouter } from "next/router";
import Link from "next/link";
import styled from 'styled-components'
import dynamic from 'next/dynamic'
// import moment from 'moment'

const Comp = dynamic(import('../components/comp'))
const Title = styled.h1`
color:yellow;
font-size: 40px;
`
const A = ({ router, name, time }) => (
  <>
  <Title>this is title{time}</Title>
  <Comp/>
  <Link href="#aaa">
    <a>
      A{router.query.id}
      {name}
    </a>
  </Link>
  <style jsx>
    {`
    a {
      color: orange;
    }`}
  </style>
  </>
);
A.getInitialProps = async () => {
  //执行到这一行代码加载moment
  const moment = await import('moment')
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Fucker',
                time: moment.default(Date.now() - 60 * 1000).fromNow()
            })
        }, 1000)
    })
  return await promise;
};
export default withRouter(A);
