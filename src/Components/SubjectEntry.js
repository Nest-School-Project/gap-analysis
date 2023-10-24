import React from "react";
import Header from "./Header"
import axios  from "axios";
import { useParams } from 'react-router-dom';

class SubjectEntry extends React.Component{
    constructor(props){
        super(props)
        this.class_name=window.location.href.split('/')[5]
        this.section=window.location.href.split('/')[6]
        this.subject_name=window.location.href.split('/')[7]
        
        this.state={
            "students":[
                
            ],
            "marks":
                {
                    
                }
                
            ,
            "assessment":"FA",
            "assessmentList":[],
            // "FA_leads":[
            //     "c1",
            //     "c2",
            // ],
            "leads":[
                "c1",
                "c2",
                "c3",
                "c4",
                "c5"
            ],
            "markValues":[
                "Emerging",
                "Developing",
                "Proficient",
                "Exemplary"
            ]
        }
    }

    handleMarkChanges=(e)=>{
        let copyState=this.state
        let s=e.target.name.split("-")
        try{
        if(s[1][0]=="F"){
            copyState.marks[e.target.id]["FA"][s[1]][s[0]]=e.target.value
        }
        else{
            copyState.marks[e.target.id]["SA"][s[1]][s[0]]=e.target.value
        }
        }
        catch{
            console.log(copyState,s)
            console.log("Error is here")
        }
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
                    marks[student.usn]["FA"]={}  
                    marks[student.usn]["SA"]={}
                    //marks[student.usn]={}
                }
            })
        }).catch(err=>{
            console.log(err)
        })
        console.log("hjg",marks)
        await axios.get(`http://localhost:8000/get-assessments/?grade=${this.class_name}`).then(response=>{
            response.data.map((assessment,index)=>{
                if(assessment.assessmentFor=="subject"){
                    assessments.push({
                        "name":assessment.assessmentName,
                        "type":assessment.assessmentType
                    })
                    if(assessment.assessmentType==="FA"){
                    students_list.map((d,index)=>{
                        marks[d.usn][assessment.assessmentType][assessment.assessmentName]={"c1":"Emerging","c2":"Emerging"}
                    })
                    }
                    else{
                        students_list.map((d,index)=>{
                            marks[d.usn][assessment.assessmentType][assessment.assessmentName]={"c1":"Emerging","c2":"Emerging","c3":"Emerging","c4":"Emerging","c5":"Emerging"}
                        })
                    }
                }
            })
        }).catch(err=>{
            console.log(err)
        })
        
        await axios.get(`http://localhost:8000/get-subject-marks/?grade=${this.class_name}&subject=${this.subject_name}&section=${this.section}`).then(response=>{
            response.data.map((d,index)=>{
                if(d.marks!=null){
                    
                    marks[d.student.usn][d.assessment.assessmentType][d.assessment.assessmentName]=d.marks
                    
                }
            })
        }).catch(err=>{
            console.log(err)
        })
        
        this.setState({
            "students":students_list,
            "marks":marks,
            "assessment":"FA",
            "assessmentList":assessments,
            "class_name":this.class_name,
            "subject_name":this.subject_name,
            "section":this.section
        })
        
    }
    submitMarks=()=>{
        axios.post("http://localhost:8000/update-subject-marks/",{"data":this.state}).then((resp)=>{
            console.log(resp)
            window.alert("Marks updated Successfully")
        }).catch(err=>{
            console.log(err)
        })
        //console.log(this.state)
    }
    render(){
        // 
        
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
                                        <th style={{border:"1px solid black"}}>{assessment.name}</th>
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
                                                            if(assessment.type=="FA"){
                                                                if(Number(lead[1])<=2){
                                                                    return (
                                                                        <th style={{border:"1px solid black"}}>{lead}</th>
                                                                    )
                                                                }
                                                            }
                                                            else{
                                                                return (
                                                                    <th style={{border:"1px solid black"}}>{lead}</th>
                                                                )
                                                            }
                                                        
                                                        
                                                        })
                                                        
                                                    }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    {
                                                        this.state.leads.map((lead,index)=>{
                                                            if(assessment.type=="FA"){
                                                                if(Number(lead[1])<=2){
                                                       return (
                                                        // <td style={{border:"1px solid black"}}><input type="number" name={[lead]+"-"+assessment} id={student.usn} value={this.state.marks[student.usn][assessment][lead]} onChange={this.handleMarkChanges}></input></td>
                                                        <td style={{border:"1px solid black"}}><select name={[lead]+"-"+assessment.name} id={student.usn} value={this.state.marks[student.usn][assessment.type][assessment.name][lead]} onChange={this.handleMarkChanges}>{
                                                            this.state.markValues.map((val,index)=>{
                                                                if(val===this.state.marks[student.usn][assessment.type][assessment.name][lead]){
                                                                    return <option value={val} selected>{val}</option>
                                                                }
                                                                else{
                                                                return <option value={val}>{val}</option>
                                                                }
                                                            })
                                                        }</select></td> 
                                                       )
                                                    }
                                                            }
                                                            else{
                                                                return (
                                                                    // <td style={{border:"1px solid black"}}><input type="number" name={[lead]+"-"+assessment} id={student.usn} value={this.state.marks[student.usn][assessment][lead]} onChange={this.handleMarkChanges}></input></td>
                                                                    <td style={{border:"1px solid black"}}><select name={[lead]+"-"+assessment.name} id={student.usn} value={this.state.marks[student.usn][assessment.type][assessment.name][lead]} onChange={this.handleMarkChanges}>{
                                                                        this.state.markValues.map((val,index)=>{
                                                                            if(val===this.state.marks[student.usn][assessment.type][assessment.name][lead]){
                                                                                return <option value={val} selected>{val}</option>
                                                                            }
                                                                            else{
                                                                            return <option value={val}>{val}</option>
                                                                            }
                                                                        })
                                                                    }</select></td> 
                                                                   )
                                                            }
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
                <button id="btn-1" onClick={this.submitMarks}>Submit</button>
            </div>
        )
    }
}

export default  SubjectEntry;