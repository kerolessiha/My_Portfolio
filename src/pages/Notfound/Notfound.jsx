import { Helmet } from "react-helmet";
import Errorimage from "../../assets/Error.png";
export default function Notfound() {
  return (
    <>
      <Helmet>
        <title>Notfound</title>
      </Helmet>
      <div className=" flex justify-center items-center">
        <img src={Errorimage} alt="Errorimage" className="w-96" />
      </div>{" "}
    </>
  );
}
