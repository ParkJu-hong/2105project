import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import AnchorTag from './AnchorTag';
import PrintData from './section/PrintData';
import WorkOut from './section/WorkOut';
import CreateContent from './section/CreateContent';
import MeditationData from './section/static/MeditationData';
import WorkOutData from './section/static/WorkOutData';

function LandingPage(props) {

  const [mode, setMode] = useState('home');
  const [meditationData, setmeditationData] = useState(MeditationData);
  const [content_id, setContent_id] = useState(meditationData.length);
  const [workoutData, setworkoutData] = useState(WorkOutData);
  const [workoutContent_id,setWorkoutContent_id] = useState(WorkOutData.length);
  const [saveMode, setSaveMode] = useState('');
  

  let _article = null;

  if (mode === 'meditation') {
    _article = <PrintData contents={meditationData}/>
  } else if (mode === 'workout') {
    _article = <PrintData contents={workoutData} />
  } else if (mode === 'createcontents') {
    
    _article = <CreateContent onChangeMode={function (_title, _desc) {
      if(saveMode === 'meditation'){
      setContent_id(content_id + 1);
      let temp = {
        id: content_id,
        title: _title,
        desc: _desc
      }
      let newData = meditationData.concat(temp);
      setmeditationData(newData);
    }else if(saveMode === 'workout'){
      setWorkoutContent_id(workoutContent_id + 1);
      let temp = {
        id: workoutContent_id,
        title: _title,
        desc: _desc
      }
      let newData = workoutData.concat(temp);
      setworkoutData(newData);
    }
    }.bind(this)}
    onChangeSave={function(_saveMode){
      setSaveMode(_saveMode);
    }.bind(this)}
    />
  }

  return (
    <section>

      <div className='mainname'>
        <p className='test'>프로젝트 100</p>
      </div>
      <br />
      <div>
        <div className='login'>
          login | join with us   |
                </div>
      </div>
      <hr />
      <div>
        <AnchorTag onChangeMode={function (_mode) {
          setMode(_mode);
        }.bind(this)} />
      </div>

      <section className="noticeboard">
        {_article}
      </section>

    </section>
  )
}

export default LandingPage
