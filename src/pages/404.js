import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>UH OHHHHHHHH</h1>
      <h2>This page unfortunately does not exist.......yet</h2>
      <p>
        Go back to <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
