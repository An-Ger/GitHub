import { Button } from "antd";
import Router from "next/router";
import Link from "next/link";
const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete",
];
function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  };
}
events.forEach((event) => {
  Router.events.on(event, makeEvent(event));
});
export default () => {
  function gotoTestB() {
    Router.push(
      {
        pathname: "/test/b",
        query: {
          id: 2,
        },
      },
      "/test/b/2"
    );
  }
  return (
    <div>
        <span>Index</span>
        <a>index a</a>
    </div>
  );
};
