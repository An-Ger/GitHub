import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";

export default () => {
    function gotoTestB(){
        Router.push('/b')
    }
return (
    <>
    <Link href="/a">
    <Button>Indes</Button>
  </Link>
  <Button onClick = {gotoTestB}>test b </Button>
  </>
)
};
//React.createElement('span', {}, 'Index)
