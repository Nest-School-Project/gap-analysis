import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
import { useParams, Navigate } from 'react-router-dom';
export const Class_details = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    
    const toentry = ()=>
    {
        Navigate('/Entry.js');
    };
    const students=[{
        "name":"Mark",
        "section":"A",
    },
    {
        "name":"Antony",
        "section":"B"
    }
]
    const sections=[
        "A",
        "B",
        "C"
    ]
    const {classname}=useParams();
    //console.log(name)
    return (
        <div ><Header></Header>
        <br></br>
            <p className="Gradename" >Class:{classname}</p>
            <ul class="nav nav-tabs" id="myTabs" role="tablist">
                {
                    sections.map((sec,index)=>{
                        return (<li class="nav-item">
                    <button class={toggleState === index+1 ? "nav-link active" : "nav-link"} onClick={() => toggleTab(index+1)}>Section {sec}</button>
                </li>)
                    })
                }
            </ul>

            <div class="tab-content" id="myTabsContent">
               
                <div class={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                    <h2>Section A</h2>
                    <hr />
                    <table class="table " >
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">USN</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">GapAnalysis</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>13001</td>
                                <td>Sugan</td>
                                <td>G</td>
                                <td><a href=
                                "/GapAnalysis/Sugan">View</a></td>
                                <td><button onClick={toentry}>Edit</button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>13002</td>
                                <td>Sameer</td>
                                <td>A</td>
                                <td><a href="/GapAnalysis/Sameer">View</a></td>
                                <td><button href=
                                "/GapAnalysis/Sameer">Edit</button></td>
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