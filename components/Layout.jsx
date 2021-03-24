import Link from "next/link";
import { Button } from "antd";
export default ({ children }) => (
  <>
    <header>
      <Link href="/a?id=1" as="/a/1" title="AAA">
        <Button>Index</Button>
      </Link>
      <Link href="/test/b" title="AAA">
        <Button>B</Button>
      </Link>
    </header>
    {children}
  </>
);
