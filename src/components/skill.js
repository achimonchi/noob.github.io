import React, {Component} from 'react'
import {Link } from 'react-router-dom'
export default class Skill extends Component{

    constructor(props){
        super(props)
        this.state = {
            skill : {
                opacity : 0
            }
        }
    }

    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({
                skill : {
                    opacity : 1
                }
            })
        })
    }



    render(){
        return(
            <section style={{opacity:this.state.skill.opacity, transition:'1s'}} id="skill" >
                <div  className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md mt-5">
                            <h2 className="text-center">My Skill</h2>
                            <hr/>
                            <div className="row mt-5">
                                <div className="col-md">
                                    <h3 className="text-center mb-4">Design Graphic</h3>
                                    <h5>Inkscape</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-design" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h5>GIMP</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-design" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    
                                    <h5>Gravit Designer</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-design" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <h3 className="text-center mb-4">Front End</h3>
                                    <h5>HTML 5</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-front" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h5>CSS 3</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-front" role="progressbar" style={{width: "83%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    
                                    <h5>Bootstrap</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-front" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h5>Javascript</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-front" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h5>React JS</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-front" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <h3 className="text-center mb-4">Back End</h3>
                                    <h5>PHP</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-back" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h5>Codeigniter</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-back" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h5>Node JS</h5>
                                    <div class="progress mb-3">
                                        <div class="progress-bar progress-bar-animated progress-bar-striped bg-success bg-back" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                        <Link to={'/portfolio'} className="btn btn-banner float-right">Interested to see My Portfolio ? <i className="fas fa-chevron-right ml-1"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}