import Link from "next/link";

function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Budget App
          </Link>
          <Link href="/entry" className="text-sm">
            Entry
          </Link>
          <Link href="/approval" className="text-sm">
            Approval
          </Link>
        </nav>
        <div className="text-sm">
          admin@test.com |{" "}
          <Link href="/logout" className="text-blue-600 hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;