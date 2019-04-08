import React, {Component} from 'react'
import Me from '../components/assets/img/_me.svg'

import {Link } from 'react-router-dom'

export default class About extends Component{

    constructor(props){
        super(props)
        this.state = {
            about : {
                opacity : 0
            }
        }
    }

    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({
                about:{
                    opacity:1
                }
            })
        })
    }

    componentWillUnmount=()=>{
        setTimeout(()=>{
            this.setState({
                about:{
                    opacity:0
                }
            })
        },200)
    }

    render(){
        return(
            <section style={{opacity:this.state.about.opacity, transition:'1s'}} id="about">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                    
                        <div className="col-md mt-5">
    
                            <center>
                            <img src={Me} />
                            </center>
                            <div className="ket mt-4">
                                <div className="row">
                                    <div className="col-md mb-3">
                                        <h2>About Me</h2>
                                        <hr/>
                                        <h6>
                                        a student, who likes all about technology, especially software development and graphic design. aspiring to open a company after graduating from college. Very fond of pressure and challenges. always put the target in all his actions
                                        </h6>
                                                                            
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div class="col-md mt-3">
                                        <h2>Biography</h2>
                                        <hr/>
                                        <h5><i className="fas fa-user mr-3"></i><b>Reyhan Jovie</b> Dwiputra</h5>
                                        <h5><i className="fas fa-shapes mr-3"></i>Generasi 17, Teknik Informatika</h5>
                                        <h5><i className="fas fa-university mr-3"></i><i>Politeknik Caltex Riau</i></h5>
                                        <h5><i className="fas fa-calendar-week mr-3"></i>Pekanbaru, <b>01 November 1999</b></h5>
                                    </div>
                                    <div className="col-md mt-3">
                                        <h2>Educations</h2>
                                        <hr/>
                                        <h5><i className="fas fa-graduation-cap mr-3"></i>SDN 006 Pekanbaru (2006 - 2011)</h5>
                                        <h5><i className="fas fa-graduation-cap mr-3"></i>MTsN Andalan Pekanbaru (2011 - 2014)</h5>
                                        <h5><i className="fas fa-graduation-cap mr-3"></i>SMAN 10 Pekanbaru (2004 - 2017)</h5>
                                        <h5><i className="fas fa-university mr-3"></i>Politeknik Caltex Riau (2017 - <i>Now</i>)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                        <Link to={'/skill'} className="btn btn-banner float-right">See My Skills <i className="fas fa-chevron-right ml-1"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}