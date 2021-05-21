import React from 'react'

function AnchorTag(props) {
    return (
        <div>
        <p>
          <a href="/meditation" title="meditation" onClick={function (e) {
            e.preventDefault();
            // debugger;
            props.onChangeMode(e.target.title);
          }.bind(this)}>명상</a>
        </p>
        <p>
          <a href="/workout" title ="workout" onClick={function (e) {
            e.preventDefault();
            props.onChangeMode(e.target.title);
          }.bind(this)}>운동</a>
        </p>
        <p>
          <a href="/createcontents" title ="createcontents" onClick={function (e) {
            e.preventDefault();
            props.onChangeMode(e.target.title);
          }.bind(this)}>Create</a>
        </p>
        </div>
    )
}

export default AnchorTag
