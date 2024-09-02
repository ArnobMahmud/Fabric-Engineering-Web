import React from "react";
import CustomSkeletonStructure from "../../screens/skeleton/CustomSkeletonStructure";

const ResourceHandler = ({ search, setSearch, loading, resource }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Lecturer</th>
            <th>Discussed Topics</th>
            <th>Resources</th>
          </tr>
        </tbody>
        <tbody>
          {loading
            ? Array(30)
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
                    val.lecturer.toLowerCase().includes(search.toLowerCase())
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
                        href={val.driveLink === "" ? "404" : val.driveLink}
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
    </>
  );
};

export default ResourceHandler;
