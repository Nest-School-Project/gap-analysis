import React from "react";
import Header from "./Header"
import axios  from "axios";
import { useParams } from 'react-router-dom';

class MarkEntry extends React.Component{
    constructor(props){
        super(props)
        this.class_name=window.location.href.split('/')[5]
        this.section=window.location.href.split('/')[6]
        this.theme_name=window.location.href.split('/')[7]
        
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
                            "c1":9,
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
            ]
        }
    }

    handleMarkChanges=(e)=>{
        let copyState=this.state
        let s=e.target.name.split("-")
        copyState.marks[e.target.id][s[1]][s[0]]=e.target.value
        this.setState(copyState)
    }

    async componentDidMount(){
        

        let students_list=[]
        let marks={}
        let assessments=[]
        await axios.get(`http://localhost:8000/get-students/?grade=${this.class_name}`).then(response=>{
            response.data.data.map((student,index)=>{
                if(student.section==this.section){
                    students_list.push({
                        "name":student.name,
                        "usn":student.usn
                    })
                    marks[student.usn]={}
                }
            })
        }).catch(err=>{
            console.log(err)
        })
        
        await axios.get(`http://localhost:8000/get-assessments/?grade=${this.class_name}`).then(response=>{
            response.data.map((assessment,index)=>{
                if(assessment.assessmentType=="FA"&&assessment.assessmentFor=="UOI"){
                    assessments.push(assessment.assessmentName)
                    students_list.map((d,index)=>{
                        marks[d.usn][assessment.assessmentName]={"c1":0,"c2":0}
                    })
                }
            })
        }).catch(err=>{
            console.log(err)
        })
        
        await axios.get(`http://localhost:8000/get-theme-marks/?grade=${this.class_name}&theme=${this.theme_name}&section=${this.section}`).then(response=>{
            response.data.map((d,index)=>{
                if(d.marks!=null){
                    
                    marks[d.student.usn][d.assessment.assessmentName]=d.marks
                    
                }
            })
        }).catch(err=>{
            console.log(err)
        })
        console.log(assessments,students_list,marks)
        this.setState({
            "students":[{"name":"Aravind","usn":"UI1234"}],
            "marks":marks,
            "assessment":"FA",
            "assessmentList":assessments,
            "leads":["c1","c2"]
        })
        console.log(this.state)
    }
    render(){
        // 
        console.log(this.state)
        return (
            <div >
                <Header />
                <table style={{border:"1px solid black",height:"10px",width:"10px"}}>
                    <thead style={{border:"1px solid black",height:"10px",width:"10px"}}>
                        <tr style={{height:"10px",width:"10px"}}>
                            <th style={{border:"1px solid black"}}>Name</th>
                            {
                                this.state.assessmentList.map((assessment,index)=>{
                                    return (
                                        <th style={{border:"1px solid black"}}>{assessment}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student,index)=>{
                                return (
                                    <tr style={{border:"1px solid black",height:"10px",width:"10px"}}>
                                        <td style={{border:"1px solid black",height:"10px",width:"10px"}}>{student.name}</td>
                                        {
                                            this.state.assessmentList.map((assessment,index)=>{
                                                
                                        return (<td style={{border:"1px solid black"}}>
                                            <table style={{height:"10px",width:"10px"}}>
                                                <thead style={{border:"1px solid black"}}>
                                                    <tr>{
                                                        this.state.leads.map((lead,index)=>{
                                                            
                                                       return (
                                                        <th style={{border:"1px solid black"}}>{lead}</th>
                                                        
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
                                                        <td style={{border:"1px solid black"}}><input type="number" name={[lead]+"-"+assessment} id={student.usn} value={this.state.marks[student.usn][assessment][lead]} onChange={this.handleMarkChanges}></input></td>
                                                        
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

export default  MarkEntry;