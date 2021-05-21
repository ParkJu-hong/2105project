import React, { useState } from 'react'


function PrintData(props) {
    // const [data, setData] = useState(MeditationData);
    return (
        <div>
            {props.contents.map((el) => <div key={el.id}>
                <h4>{el.title}</h4>
                <div>{el.desc}</div>
            </div>
            )}
        </div>
    )
}

export default PrintData
