import ReportTaskButton from "./ReportTaskButton";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header shadow">
      <div className="header__left">
        <ReportTaskButton/>
      </div>
      <div className="header__right">
        <SearchBar/>
      </div>
    </header>
  );
};

export default Header;
