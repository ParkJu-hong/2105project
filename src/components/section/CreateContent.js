import React from 'react'

function CreateContent(props) {
    return (
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
                onSubmit={function (e) {
                    e.preventDefault();
                    let _title = e.target.title.value;
                    let _desc = e.target.desc.value;
                    props.onChangeMode(_title, _desc);
                }.bind(this)}
            >
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="desc" placeholder="description"></textarea></p>
                
                <button onClick={function (e) {
                    alert("You have chosen meditation!");
                    e.preventDefault();
                    props.onChangeSave("meditation");
                }.bind(this)}>meditation</button>
                <button onClick={function (e) {
                    alert("You have chosen workout!");
                    e.preventDefault();
                    props.onChangeSave("workout");
                }.bind(this)}>workout</button>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    )
}

export default CreateContent
