import { useState } from "react";
import articleData from "../../../../public/json/articles.json";

const Articles = () => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl lg:text-2xl 2xl:text-4xl font-semibold my-2 lg:my-4">
          Articles
        </h2>
        {seeAll ? (
          <button onClick={() => setSeeAll(false)} className="text-gray-500">
            See less
          </button>
        ) : (
          <button onClick={() => setSeeAll(true)} className="text-gray-500">
            See all
          </button>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 2xl:gap-6 gap-y-12">
        {articleData.slice(seeAll ? 0 : 3).map((data, i) => {
          return (
            <div key={i} className="space-y-2">
              <img
                src={data.image}
                alt="articles image"
                className="rounded-lg"
              />
              <div className="flex items-center gap-2 text-sm capitalize">
                <p>{data.date}</p>
                <p>{data.type}</p>
              </div>
              <p className="font-semibold text-sm">{data.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
