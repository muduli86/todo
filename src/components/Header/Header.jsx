import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles(() => ({
//   header: {
//     padding: 0,
//   },
// }));

const Header = () => {
  return (
    <header>
      <h1>
        <CalendarTodayIcon />
        What To Do
      </h1>
    </header>
  );
};

export default Header;
