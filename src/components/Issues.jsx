import React, { useState, useEffect } from "react";
import GIT_HUB_SERVICE from '../services/git-hub-api'
import IssueCard from './IssueCard'
import ReactAutocomplete from 'react-autocomplete'

export default function Issues (props) {
  const [issues, setIssues] = useState([]);
  const [labels, setLabels] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    GIT_HUB_SERVICE.GET_ALL('facebook','react').then((res) => {
        setIssues(res.data);
      })
    GIT_HUB_SERVICE.GET_LABELS('facebook','react').then((res) => {
      setLabels(res.data.map((label) => {return { id: label.id.toString(), label : label.name.toString()}  }));
    })
    return () => {};
  }, []);

  return (
    <div className="container">
      <ReactAutocomplete
        items={labels}
        getItemValue={item => item.label}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={input}
        onChange={e => setInput(e.target.value)}
        onSelect={value => setInput( value )}
      />  


      {issues?.map((issue) => {
        return (
        <IssueCard
          key={issue.id}
          title={issue.title}
          labels={issue.labels}
        />
        )}
      )}

    </div>
  );
}
