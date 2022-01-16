import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseArea } from "../../../config/Palette";
import NTFInfo from "../../../database/lecturerData/Level1Term1/NTFInfo";
import SkeletonResourceCard from "../../../screens/skeleton/SkeletonResourceCard";
import CustomResourceCard from "../CustomResourceScreen";

const NTFTable = () => {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabricweb-backend-server.herokuapp.com/api/getResources/ntf1-1"
        )
        .then((response) => {
          setResource(response.data);
          setLoading(false);
        });
    }, 1500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div>
      <CourseArea>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h1>Natural Textile Fiber (NTF)</h1>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Lecturer</th>
                    <th>Discussed Topics</th>
                    <th colSpan={3}>Resources</th>
                  </tr>
                </tbody>
                <tbody>
                  {loading && <SkeletonResourceCard />}
                  {!loading &&
                    resource.map((row) => (
                      <CustomResourceCard
                        Date={row.Date}
                        Lecturer={row.Lecturer}
                        DiscussedTopics={row.DiscussedTopics}
                        DriveLink={row.DriveLink}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CourseArea>
      <NTFInfo />
    </div>
  );
};

export default NTFTable;
