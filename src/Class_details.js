import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';

export const Class_details = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div ><Header></Header>
            <p className="Gradename" >LKG</p>
            <ul class="nav nav-tabs" id="myTabs" role="tablist">
                <li class="nav-item">
                    <button class={toggleState === 1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(1)}>Section A</button>
                </li>
                <li class="nav-item">
                    <button class={toggleState === 2 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(2)}>Section B</button>
                </li>
                <li class="nav-item">
                    <button class={toggleState === 3 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(3)}>Section C</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabsContent">
                <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <h2>Section A</h2>
                    <hr />
                    <table class="table " >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <h2>Section B</h2>
                    <hr />
                    <p>table content of section 2</p>
                </div>
                <div class={toggleState === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <h2>Section C</h2>
                    <hr />
                    <p>table content of section 3</p>
                </div>
            </div>
        </div>
    )
}

export default Class_details;