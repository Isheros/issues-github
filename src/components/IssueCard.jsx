import React, { } from "react";

export default function IssueCard (props) {
  
  return (
      <div className="card" style={{'z-index':'-1'}}>
        <div className="card-body flex-column d-flex">
          <div className="flex-row d-flex justify-content-start">
            {props.title}
          </div>

          <div className="flex-row d-flex justify-content-start">
          {"Labels: "}
          </div>
            <div className="flex-row d-flex justify-content-start">
                {props.labels?.map((label) => {
                    return <div className="p-1">{`${label.name}`} </div>
                  })
                }
            </div>
        </div>
      </div>
  );
}
