import React from 'react';

const List = ({arr}) => {
  return(
    <>
      {arr.map((obj) => {
        return(
          <div className="item">
            <div>
              <p><b>Name:</b> {obj.name}</p>
              <p><b>Age:</b> {obj.age}</p>
            </div>
            <div>
              <img src={obj.image}/>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default List;
