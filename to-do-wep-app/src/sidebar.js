import React from 'react';


class Sidebar extends React.Component {
    render() {
        return <aside class="collapse d-sm-block col-sm-3 col-12 bg-light below-nav" id="left-sidebar">
            <div class="list-group list-group-flush">
                <Filter></Filter>
            </div>
            <div class="my-5">
                <h6 class="border-bottom border-gray p-3 mb-0">Projects</h6>
                <div class="list-group list-group-flush">
                <Project></Project>
                </div>
            </div>
        </aside>
    }
}

function Filter(props) {
    return <>
        <a href="#top" class="list-group-item list-group-item-action active">All</a>
        <a href="#top" class="list-group-item list-group-item-action">Important</a>
        <a href="#top" class="list-group-item list-group-item-action">Today</a>
        <a href="#top" class="list-group-item list-group-item-action">Next 7 Days</a>
        <a href="#top" class="list-group-item list-group-item-action">Private</a>
        <a href="#top" class="list-group-item list-group-item-action">Shared With...</a>
    </>
}

function Project(props) {
    return <>
        <a href="#top" class="list-group-item list-group-item-action">Web Applications I</a>
        <a href="#top" class="list-group-item list-group-item-action">Personal</a>
        <a href="#top" class="list-group-item list-group-item-action">Web Applications I</a>
        <a href="#top" class="list-group-item list-group-item-action">Personal</a>
        <a href="#top" class="list-group-item list-group-item-action">Web Applications I</a>
        <a href="#top" class="list-group-item list-group-item-action">Personal</a>
        <a href="#top" class="list-group-item list-group-item-action">Web Applications I</a>
        <a href="#top" class="list-group-item list-group-item-action">Personal</a>
    </>
}


export { Sidebar }