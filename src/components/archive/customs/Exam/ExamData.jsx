import NoRoutineScreen from "../../../screens/NoRoutine";
import { SafeArea } from "../../config/custom";
import { useParams, useLocation } from "react-router-dom";

const ExamData = () => {
  const params = useParams();
  const refID = params.refID;
  const location = useLocation();
  const data = location.state?.data;
  console.log(refID);

  return (
    <SafeArea>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-xl-11 col-md-12 col-sm-12">
            <div className="section-title">
              <h1>{data["department"]}</h1>
            </div>
            <table>
              <tbody>
                {/* <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Course Code</th>
                  <th>Course</th>
                </tr> */}
                {data["exams"]?.length > 0 ? (
                  data["exams"].map((e) => (
                    <tr>
                      <td>{e.date}</td>
                      <td>{e.time}</td>
                      <td>{e["course-code"]}</td>
                      <td>{e.course}</td>
                    </tr>
                  ))
                ) : (
                  <NoRoutineScreen />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SafeArea>
  );
};

export default ExamData;
