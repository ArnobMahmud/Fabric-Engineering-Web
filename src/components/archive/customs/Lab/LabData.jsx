import NoRoutineScreen from "../../../screens/NoRoutine";
import { SafeArea } from "../../config/custom";
import { useParams, useLocation } from "react-router-dom";

const LabData = () => {
  const params = useParams();
  const refID = params.refID;
  const location = useLocation();
  const data = location.state?.data;
  console.log(refID);

  return (
    <>
      <SafeArea>
        <div className="container">
          <div className="row justify-content-center">
            {data["labinfo"].map((e) => (
              <div className="card col-xl-11 col-md-12 col-sm-12">
                <div className="section-title">
                  <h1>Group - {e.group}</h1>
                </div>
                <NoRoutineScreen />
              </div>
            ))}
          </div>
        </div>
      </SafeArea>
    </>
  );
};

export default LabData;
