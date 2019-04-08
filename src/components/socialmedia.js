import React, {Component} from 'react'
import {Link } from 'react-router-dom'

export default class SocialMedia extends Component{

    constructor(props){
        super(props)
        this.state={
            all : {
                opacity : 0
            }
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                all:{
                    opacity:1
                }
            })
        },100)
    }

    render(){
        return(
            <section id="social" style={{opacity:this.state.all.opacity, transition:'1s'}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md mt-5">
                            <h2>Social Media</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md">
                                    <h5><i className="mr-2 fab fa-instagram"></i> @reyhanjovie</h5>
                                    <h5><i className="mr-2 fab fa-instagram"></i> @noobprogrammer</h5>
                                    <h5><i className="mr-2 fab fa-facebook"></i> Reyhan Jovie Dwipura</h5>
                                    <h5><i className="mr-2 fab fa-line"></i> @mouravender</h5>
                                    
                                </div>
                                <div className="col-md text-right">
                                    <h5> 0823 1182 7081 <i className="fab fa-whatsapp ml-2"></i></h5>
                                    <h5> 0823 1182 7081 <i className="fab fa-telegram ml-2"></i></h5>
                                    <h5> reyhan@technet.id <i className="fas fa-envelope-open ml-2"></i></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md mt-5">
                            <h1 className="text-center mt-5">Thanks For Your Attention ! ^-^</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}