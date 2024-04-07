import templateData from "../../../../public/json/templates.json";

import { MdOutlineSmartphone } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

const Templates = () => {
  return (
    <>
      <h2 className="section-title">
        Templates
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 2xl:gap-6 gap-y-12">
        {templateData.map((data, i) => {
          return (
            <div key={i}>
              <img
                src={data.image}
                alt="template image"
                className="rounded-lg"
              />
              <div className="flex justify-between items-center my-1">
                <h4 className="font-bold text-sm">{data.name}</h4>
                <div className="flex items-center gap-2 lg:gap-3">
                  <p className="flex items-center gap-1">
                    <MdOutlineSmartphone size={16} />
                    {data.screens}
                  </p>
                  <p className="flex items-center gap-1">
                    <TbDownload size={16} />
                    {data.downloads}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Templates;
