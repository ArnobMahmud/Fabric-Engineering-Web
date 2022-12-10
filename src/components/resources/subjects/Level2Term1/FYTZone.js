import axios from "axios";
import React, { useState, useEffect } from "react";
import { ResourceArea } from "../../Palette";
import { ImBook } from "react-icons/im";
import FolderPathCard from "../../widgets/FolderPathCard";
import CustomSkeletonStructure from "../../../screens/skeleton/CustomSkeletonStructureII";

const FYTZone = () => {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      axios
        .get(
          "https://fabric-web-backend-server.onrender.com/api/v1/notes/fyt2-1"
        )
        .then((response) => {
          setNote(response.data);
          setLoading(false);
        });
    }, 2500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <>
      <ResourceArea>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {loading
              ? Array(4)
                  .fill()
                  .map((_, index) => (
                    <div className="col-lg-5 col-md-6 col-sm-12">
                      <FolderPathCard
                        title={
                          <CustomSkeletonStructure height={30} width={`100`} />
                        }
                        subTitle={
                          <CustomSkeletonStructure height={30} width={`100`} />
                        }
                        description={
                          <CustomSkeletonStructure height={30} width={`100`} />
                        }
                        driveLink={
                          <CustomSkeletonStructure height={40} width={`35%`} />
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
      </ResourceArea>{" "}
    </>
  );
};
export default FYTZone;
