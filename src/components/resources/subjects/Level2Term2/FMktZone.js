import React, { useState, useEffect } from "react";
import { OnlineResourceArea } from "../../Palette";
import { ImBook } from "react-icons/im";
import FolderPathCard from "../../widgets/FolderPathCard";
import CustomSkeletonStructure2 from "../../../screens/skeleton/CustomSkeletonStructureII";
import CustomSkeletonStructure from "../../../screens/skeleton/CustomSkeletonStructure";
import { CourseArea } from "../../../config/Palette";
import { RESOURCE_URL } from "../../api/api";
import { NOTE_URL } from "../../api/api";

const FMktZone = () => {
  const [resource, setResource] = useState([]);
  const [search, setSearch] = useState("");
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(`${RESOURCE_URL}/fmkt2-2`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setResource(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  useEffect(() => {
    try {
      fetch(`${NOTE_URL}/fmkt2-2`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNote(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return (
    <>
      <CourseArea>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="section-title">
                <h1>Fundamentals of Marketing (FMkt)</h1>
              </div>
              <input
                type="text"
                placeholder="Search here..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <table>
                <tbody>
                  {loading ? (
                    <tr>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                      <th>
                        <CustomSkeletonStructure />
                      </th>
                    </tr>
                  ) : (
                    <tr>
                      <th>Date</th>
                      <th>Lecturer</th>
                      <th>Discussed Topics</th>
                      <th>Resources</th>
                    </tr>
                  )}
                </tbody>
                <tbody>
                  {loading
                    ? Array(10)
                        .fill()
                        .map((item, index) => (
                          <tr>
                            <td>
                              <CustomSkeletonStructure />
                            </td>
                            <td>
                              <CustomSkeletonStructure />
                            </td>
                            <td>
                              <CustomSkeletonStructure />
                            </td>
                            <td className="link">
                              <CustomSkeletonStructure />
                            </td>
                          </tr>
                        ))
                    : resource
                        .filter((val) => {
                          if (search === "") {
                            return val;
                          } else if (
                            val.discussedTopics
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            val.date.includes(search) ||
                            val.lecturer
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return val;
                          }
                          return null;
                        })
                        .map((val, key) => (
                          <tr key={key}>
                            <td>{val.date}</td>
                            <td>{val.lecturer}</td>
                            <td>{val.discussedTopics}</td>
                            <td className="link">
                              <a
                                href={
                                  val.driveLink === "" ? "404" : val.driveLink
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Lecture Video
                              </a>
                            </td>
                          </tr>
                        ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CourseArea>

      <OnlineResourceArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {loading
              ? Array(4)
                  .fill()
                  .map((_, index) => (
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <FolderPathCard
                        title={
                          <CustomSkeletonStructure2 height={30} width={`100`} />
                        }
                        subTitle={
                          <CustomSkeletonStructure2 height={30} width={`100`} />
                        }
                        description={
                          <CustomSkeletonStructure2 height={30} width={`100`} />
                        }
                        driveLink={
                          <CustomSkeletonStructure2 height={40} width={`35%`} />
                        }
                      />
                    </div>
                  ))
              : note.map((e, key) => (
                  <div key={key} className="col-lg-5 col-md-6 col-sm-12">
                    <div className="card">
                      <div className="content">
                        <h1>{e.title}</h1>
                        <h5>{e.subTitle}</h5>
                        <p>{e.description}</p>
                        <div className="btn">
                          <a
                            href={e.driveLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Visit Here <ImBook />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </OnlineResourceArea>
    </>
  );
};
export default FMktZone;
