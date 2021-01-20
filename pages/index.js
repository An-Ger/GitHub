import { Button } from "antd";
import Router from 'next/router'
import Link from "next/link";
export default () => {
    function gotoTestB () {
        Router.push('/test/b')
    }
return (
    <>
    <Link href = "/a">
    <Button>Index</Button>
  </Link>
  <Button onClick = {gotoTestB}>test b</Button>
  </>
)
};
