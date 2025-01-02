import React from "react";
// App.js den gelen film propunu kullandık
function Film({ filmPropu }) {
  // object desc
  const { id, name, description, image } = filmPropu;
  return (
    <div className="container d-flex py-4">
      <div className="bg-dark text-light d-flex align-items-center w-100 justify-content-between p-2">
        <div>
          <img src={filmPropu.image} alt="" width={200} />
        </div>
        <div>
          <h4 className="text-info text-center">{filmPropu.name}</h4>
        </div>
        <div className="w-50">
          <span>{filmPropu.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Film;
