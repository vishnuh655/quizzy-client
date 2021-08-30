import Link from "next/link";

const NavItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "List",
    link: "/admin/quiz-list",
  },
  {
    id: 3,
    name: "Create",
    link: "/admin/create-quiz",
  },
  {
    id: 4,
    name: "Update",
    link: "/admin/update-quiz",
  },
  {
    id: 5,
    name: "Delete",
    link: "/admin/delete-quiz",
  },
];

const NavBarItems = (navbaritems: any) =>
  navbaritems.map((item: any) => (
    <div className="text-white semibold" key={item.id}>
      <Link href={item.link}>{item.name}</Link>
    </div>
  ));

const NavBar = () => (
  <div className=" bg-green-400">
    <div className="container mx-auto p-2.5">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-start-1 col-end-3">
          <div className="flex flex-row">
            <h1 className="text-white font-black">Quizzy</h1>
          </div>
        </div>
        <div className="col-end-7 col-span-3">
          <div className="flex flex-row-reverse gap-4">
            {NavBarItems(NavItems)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
