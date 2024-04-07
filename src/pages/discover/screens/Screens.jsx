import screensData from "../../../../public/json/screens.json";

const Screens = () => {
  return (
    <>
    <h2 className="section-title">Screens</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-4 2xl:gap-6 gap-y-12">
        {screensData.map((data, i) => {
          return (
            <div key={i}>
              <img
                src={data.image}
                alt="template image"
                className="rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Screens;