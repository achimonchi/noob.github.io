import React, {Component} from 'react'
import des1 from './assets/img/All-Design.png'
import des2 from './assets/img/background.svg'
import des3 from './assets/img/isometrik01.svg'
import web1 from './assets/img/ilshs.jpg'
import web2 from './assets/img/ito.jpg'
import web3 from './assets/img/ilshs.jpg'
import {Link } from 'react-router-dom'


export default class Portfolio extends Component{

    constructor(props){
        super(props)

        this.state = {
            all : {
                opacity:0
            },
            btn : {
                all : 'btn btn-secondary active',
                design : 'btn btn-secondary',
                web : 'btn btn-secondary'
            },
            design : {
                des1 : {
                    des : des1,
                    opacity : 1,
                    display : 'none'
                },
                des2 : {
                    des : des2,
                    opacity : 1,
                    display : 'none'
                },
                des3 : {
                    des : des3,
                    opacity : 1,
                    display : 'none'
                }
            },
            web : {
                web1 : {
                    web : web1,
                    opacity : 1,
                    display : 'none'
                },
                web2 : {
                    web : web2,
                    opacity : 1,
                    display : 'none'
                },
                web3 : {
                    web : web3,
                    opacity : 1,
                    display : 'none'
                }
            }
            
        }
    }

    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({
                all : {
                    opacity:1
                }
            })
        },200)
    }

    onActiveAll=()=>{
        this.setState({
            btn : {
                all : 'btn btn-secondary active',
                design : 'btn btn-secondary',
                web : 'btn btn-secondary'
            },
            design : {
                des1 : {
                    des : des1,
                    opacity : 1,
                    display : 'none'
                },
                des2 : {
                    des : des2,
                    opacity : 1,
                    display : 'none'
                },
                des3 : {
                    des : des3,
                    opacity : 1,
                    display : 'none'
                }
            },
            web : {
                web1 : {
                    web : web1,
                    opacity : 1,
                    display : 'none'
                },
                web2 : {
                    web : web2,
                    opacity : 1,
                    display : 'none'
                },
                web3 : {
                    web : web3,
                    opacity : 1,
                    display : 'none'
                }
            }
        })
    }

    onActiveDesign=()=>{
        this.setState({
            btn : {
                all : 'btn btn-secondary ',
                design : 'btn btn-secondary active',
                web : 'btn btn-secondary'
            },
            design : {
                des1 : {
                    des : des1,
                    opacity : 1
                },
                des2 : {
                    des : des2,
                    opacity : 1
                },
                des3 : {
                    des : des3,
                    opacity : 1
                }
            },
            web : {
                web1 : {
                    web : web1,
                    opacity : 0
                },
                web2 : {
                    web : web2,
                    opacity : 0
                },
                web3 : {
                    web : web3,
                    opacity : 0
                }
            }
        })


    }

    onActiveWeb=()=>{
        this.setState({
            btn : {
                all : 'btn btn-secondary ',
                design : 'btn btn-secondary ',
                web : 'btn btn-secondary active'
            },
            design : {
                des1 : {
                    des : des1,
                    opacity : 0
                },
                des2 : {
                    des : des2,
                    opacity : 0
                },
                des3 : {
                    des : des3,
                    opacity : 0
                }
            },
            web : {
                web1 : {
                    web : web1,
                    opacity : 1
                },
                web2 : {
                    web : web2,
                    opacity : 1
                },
                web3 : {
                    web : web3,
                    opacity : 1
                }
            }
        })
    }

    render(){
        return(
            <section id="portfolio" >
                <div className="container" style={{opacity:this.state.all.opacity, transition:'1s'}}>
                    <div className="row">
                        <div className="col-md mt-5">
                            <center>
                                <h2>My Project and My Portfolio</h2>
                                <hr/>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md mt-3">
                            <center>
                                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label onClick={this.onActiveAll} className={this.state.btn.all}>
                                        <input type="radio" name="options" id="option1"  autocomplete="off"/> All
                                    </label>
                                    <label onClick={this.onActiveDesign} className={this.state.btn.design}>
                                        <input type="radio" name="options" id="option2"  autocomplete="off"/> Design
                                    </label>
                                    <label onClick={this.onActiveWeb} className={this.state.btn.web}>
                                        <input type="radio" name="options" id="option3"  autocomplete="off"/> Website
                                    </label>
                                </div>
                            </center>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.design.des2.des} style={{opacity:this.state.design.des2.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.design.des1.des} style={{opacity:this.state.design.des1.opacity, transition:'1s'}} />
                            </div>
                        </div>
                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.design.des2.des} style={{opacity:this.state.design.des2.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.design.des1.des} style={{opacity:this.state.design.des1.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.web.web1.web} style={{opacity:this.state.web.web1.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.web.web2.web} style={{opacity:this.state.web.web1.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                        <div className="col-md mt-5">
                            <div className="card">
                                <img src={this.state.web.web1.web} style={{opacity:this.state.web.web1.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                        <div className="col-md mt-5">
                            <div className="card">
                            <img src={this.state.web.web2.web} style={{opacity:this.state.web.web1.opacity, transition:'1s'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <Link className="btn btn-banner float-right mt-2" to={'/social-media'}>Contact Me <i className="fas fa-chevron-right ml-1"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}