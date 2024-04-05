import { ResourceArea } from "../../Palette";
import ResourceTreeCard from "../../widgets/ResourceTree";
import data from "../../json/data.json";

const ResourceScreen = () => {
  return (
    <ResourceArea>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          {data.map((e) => (
            <div className="col-xl-5 col-md-6 col-sm-12">
              <ResourceTreeCard
                level={e["level-term"]}
                content={e["courses"]}
                accessLink={e["id"]}
                data={e}
              />
            </div>
          ))}
        </div>
      </div>
    </ResourceArea>
  );
};

export default ResourceScreen;
