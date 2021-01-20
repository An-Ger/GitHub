import { Button } from "antd";
import Router from 'next/router'
import Link from "next/link";
export default () => {
    function gotoTestB () {
        Router.push({
            pathname: '/test/b',
            query: {
                id: 2
            }
        })
    }
return (
    <>
    <Link href = "/a?id=1" title="AAA">
    <Button>Index</Button>
  </Link>
  <Button onClick = {gotoTestB}>test b</Button>
  </>
)
};
