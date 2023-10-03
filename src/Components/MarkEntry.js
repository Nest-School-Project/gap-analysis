import React from "react";

class MarkEntry extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "students":[
                {
                    "name":"Mark",
                    "usn":"DF3123"
                },
                {
                    "name":"Andrew",
                    "usn":"DF3124"
                },
                {
                    "name":"Anto",
                    "usn":"DF3125"
                }
            ],
            "marks":
                {
                    "DF3123":{
                        "FA1":{
                            "c1":3,
                            "c2":0,
                        },
                        "FA2":{
                            "c1":3,
                            "c2":0,
                        }
                    },
                    "DF3124":{
                        "FA1":{
                            "c1":0,
                            "c2":0
                        },
                        "FA2":{
                            "c1":3,
                            "c2":0,
                        }
                    },
                    "DF3125":{
                        "FA1":{
                            "c1":0,
                            "c2":0
                        },
                        "FA2":{
                            "c1":3,
                            "c2":0,
                        }
                    }
                }
                
            ,
            "assessment":"FA",
            "assessmentList":[
                "FA1",
                "FA2"
            ],
            "leads":[
                "c1",
                "c2",
                "c3"
            ]
        }
    }

    handleMarkChanges=(e)=>{
        let copyState=this.state
        let s=e.target.name.split("-")
        copyState.marks[e.target.id][s[1]][s[0]]=e.target.value
        this.setState(copyState)
    }
    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            {
                                this.state.assessmentList.map((assessment,index)=>{
                                    return (
                                        <th>{assessment}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student,index)=>{
                                return (
                                    <tr>
                                        <td>{student.name}</td>
                                        {
                                            this.state.assessmentList.map((assessment,index)=>{
                                                
                                        return (<td>
                                            <table>
                                                <thead>
                                                    <tr>{
                                                        this.state.leads.map((lead,index)=>{
                                                            
                                                       return (
                                                        <th>{lead}</th>
                                                        
                                                       )
                                                        })
                                                    }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    {
                                                        this.state.leads.map((lead,index)=>{
                                                            
                                                       return (
                                                        <td><input type="number" name={[lead]+"-"+assessment} id={student.usn} value={this.state.marks[student.usn][assessment][lead]} onChange={this.handleMarkChanges}></input></td>
                                                        
                                                       )
                                                        })
                                                    }
                                                        {/* <td><input type="number" name={"c1-"+assessment} id={student.usn} value={this.state.marks[student.usn][assessment]["c1"]} onChange={this.handleMarkChanges}></input></td>
                                                        <td><input type="number" name={"c2-"+assessment} id={student.usn} value={this.state.marks[student.usn][assessment]["c2"]} onChange={this.handleMarkChanges}></input></td> */}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>)
                                            })
                                        }   
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MarkEntry;