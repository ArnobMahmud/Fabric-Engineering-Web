import React from "react";
import { ImBook } from "react-icons/im";
import FolderPathCard from "./widgets/FolderPathCard";
import CustomSkeletonStructure2 from "../screens/skeleton/CustomSkeletonStructureII";

const NoteHandler = ({ loading, note }) => {
  return (
    <>
      {loading
        ? Array(4)
            .fill()
            .map((_, key) => (
              <div key={key} className="col-lg-5 col-md-6 col-sm-12">
                <FolderPathCard
                  title={<CustomSkeletonStructure2 height={30} width={`100`} />}
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
                    <a href={e.driveLink} target="_blank" rel="noreferrer">
                      Visit Here <ImBook />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};

export default NoteHandler;
