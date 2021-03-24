import { withRouter } from "next/router";
import Link from "next/link";
import moment from 'moment'
import dynamic from 'next/dynamic'
const A = ({ router, name, time }) => (
  <>
  <Comp/>
    <Link href="#aaa">
      <a>
        A{router.query.id}
        {name}
        {time}
      </a>
    </Link>
    <style jsx>{`
    a {
        color: blue;
    }
    `}</style>
  </>
);
const Comp = dynamic(import('../components/comp'))
A.getInitialProps = async (ctx) => {
    const moment = await import('moment')//webpack提供的方法
  const promise = new Promise((res) => {
    setTimeout(() => {
      res({
        name: "why",
        time:moment.default(Date.now() - 60 * 1000).fromNow()
      });
    }, 1000);
  });
  return await promise;
};
export default withRouter(A);
