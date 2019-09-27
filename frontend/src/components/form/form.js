import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mood1: false,
            mood2: false,
            mood3: false,
            mood4: false,
            mood5: false,
            mood6: false,
            mood7: false,
            videos: false,
            photos: false,
            quotes: false
        }
        this.handlemood1 = this.handlemood1.bind(this)
        this.handlemood2 = this.handlemood2.bind(this)
        this.handlemood3 = this.handlemood3.bind(this)
        this.handlemood4 = this.handlemood4.bind(this)
        this.handlemood5 = this.handlemood5.bind(this)
        this.handlemood6 = this.handlemood6.bind(this)
        this.handlemood7 = this.handlemood7.bind(this) 
        this.handlevideos = this.handlevideos.bind(this) 
        this.handlephotos = this.handlephotos.bind(this) 
        this.handlequotes = this.handlequotes.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handlemood1 () {
        this.state.mood1 ? (
            this.setState({
                mood1: false
            })
        ) : (
            this.setState({
                mood1: true
            })
        )
    }
    handlemood2 () {
        this.state.mood2 ? (
            this.setState({
                mood2: false
            })
        ) : (
            this.setState({
                mood2: true
            })
        )
    }

    handlemood3 () {
        this.state.mood3 ? (
            this.setState({
                mood3: false
            })
        ) : (
            this.setState({
                mood3: true
            })
        )
    }

    handlemood4 () {
        this.state.mood4 ? (
            this.setState({
                mood4: false
            })
        ) : (
            this.setState({
                mood4: true
            })
        )
    }

    handlemood5 () {
        this.state.mood5 ? (
            this.setState({
                mood5: false
            })
        ) : (
            this.setState({
                mood5: true
            })
        )
    }

    handlemood6 () {
        this.state.mood6 ? (
            this.setState({
                mood6: false
            })
        ) : (
            this.setState({
                mood6: true
            })
        )
    }

    handlemood7 () {
        this.state.mood7 ? (
            this.setState({
                mood7: false
            })
        ) : (
            this.setState({
                mood7: true
            })
        )
    }
    handlevideos () {
        this.state.videos ? (
            this.setState({
                videos: false
            })
        ) : (
            this.setState({
                videos: true
            })
        )
    }
    handlephotos () {
        this.state.photos ? (
            this.setState({
                photos: false
            })
        ) : (
            this.setState({
                photos: true
            })
        )
    }

    handlequotes () {
        this.state.quotes ? (
            this.setState({
                quotes: false
            })
        ) : (
            this.setState({
                quotes: true
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.history.push({
            pathname: '/search',
            search: `?mood1=${this.state.mood1}&mood2=${this.state.mood2}&mood3=${this.state.mood3}&mood4=${this.state.mood4}&mood5=${this.state.mood5}&mood6=${this.state.mood6}&mood7=${this.state.mood7}&videos=${this.state.videos}&photos=${this.state.photos}&quotes=${this.state.quotes}`,
            state: {
                videos: this.state.videos,
                photos: this.state.photos,
                quotes: this.state.quotes
            }
        })
    
        
    }



    render() {
        // debugger
        return (
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='category-checkbox'>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood1}/>
                            Lost of motivation
                        </label>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood2}/>
                            Stressed
                        </label>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood3}/>
                            Imposter syndrome
                        </label>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood4}/>
                            Test anxiety
                        </label>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood5}/>
                            Social anxiety
                        </label>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood6}/>
                            Pressure
                        </label>
                        <label> 
                            <input type='checkbox' onClick={this.handlemood7}/>
                            Mental fatigue
                        </label>
                    </div>

                    <div className='content-checkbox'>
                        <label>
                            <input type='checkbox' onClick={this.handlevideos}/>
                            Videos
                        </label>
                        <label>
                            <input type='checkbox' onClick={this.handlephotos}/>
                            Photos
                        </label>
                        <label>
                            <input type='checkbox' onClick={this.handlequotes}/>
                            Quotes
                        </label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;