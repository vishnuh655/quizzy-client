import NavBar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div className="">
      <NavBar />
      <div className="container mx-auto h-full p-1.5">{children}</div>
    </div>
  );
}
