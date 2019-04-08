import React, {Component} from 'react'

import '../components/assets/css/style-index.css'

import {Link } from 'react-router-dom'

export default class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            banner :{
                opacity:0
            },
            h1 :{
                opacity : 0,
                transformX : '500px'
            },
            h2 : {
                opacity : 0,
                transformX : '-500px'
            },
            button : {
                opacity:0,
                scale : 0
            }
            
        }
        
    }

    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({
                banner:{
                    opacity:.5
                }
            })
        },200)
        setTimeout(()=>{
            this.setState({
                h1 : {
                    opacity:1,
                    transformX : '0'
                }
            })
        },1200)

        setTimeout(()=>{
            this.setState({
                h2 : {
                    opacity:1,
                    transformX : '0'
                }
            })
        },1500)
        setTimeout(()=>{
            this.setState({
                button : {
                    opacity:1,
                    scale:1
                }
            })
        },1800)
    }
    render(){
        return(
            <section id="banner">
                <div style={{opacity:this.state.banner.opacity, transition:'1s'}} className="overlay"></div>
                <div  className="container">
                    <div className="row">
                        <div className="col-md">
                            <div  className="text-banner">
                                <h1 style={{opacity:this.state.h1.opacity, transform:'translateX('+this.state.h1.transformX+')', transition:'1s'}}>Hello, <b>I'm Reyhan Jovie</b></h1>
                                <h2 style={{opacity:this.state.h2.opacity, transform:'translateX('+this.state.h2.transformX+')', transition:'1.2s'}}>a <b>Designer</b> and <b>Developer</b></h2>
                            </div>
                            <Link to={'/about'} style={{opacity:this.state.button.opacity, transform:'scale('+this.state.button.scale+')', transition:'1.5s'}} className="btn btn-banner mt-4">Know more about me <i className="fas fa-chevron-right ml-1"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}