import React from 'react'
import Sidebar from '../Sidebar'
import Meditation from './sections/Meditation'
import WorkOut from './sections/WorkOut'
function LandingPage(props) {
    if (props.noticeboard === 'meditation') {
        return (
            <>
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
                <Sidebar />
                <div style={{}}></div>

                <section className="noticeboard">
                    <Meditation />
                </section>
            </>
        );
    } else if (props.noticeboard === 'workout') {
        return (
            <>
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
                <Sidebar />
                <div style={{}}></div>

                <section className="noticeboard">
                    <WorkOut />
                </section>
            </>
        )
    } else if (props.noticeboard === 'home') {
        return (
            <>
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
                <Sidebar />
                <div style={{}}></div>

                <section className="noticeboard">
                    HOME
        </section>
            </>
        )
    };
}

export default LandingPage
