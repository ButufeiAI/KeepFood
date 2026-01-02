import { Link } from "react-router-dom";

const CommonFooter = () => {
  return (
   <>
  {/* Start Footer */}
  <footer className="footer text-center">
        <p className="mb-0 text-dark">
          Copyright © {new Date().getFullYear()} - <Link to="#" className="text-primary">Dreams Timer</Link>
        </p>
      </footer>
  {/* End Footer */}
</>

  );
};

export default CommonFooter;
