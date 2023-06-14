import Header from "./components/Header";
import Main from "./components/Main"
import Menu from "./components/Aside";

export const App = () => {

  return (
    <div className="min-h-full overflow-hidden grid grid-areas-layout grid-rows-[64px_1fr] grid-cols-[240px_1fr] font-['SFProDisplay-Regular']">
      <Header />
      <Menu />
      <Main />
    </div>
  );
};
