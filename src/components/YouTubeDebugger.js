// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    setResolution = () => {
        this.setState({settings:  Object.assign({}, this.state.settings, {video: {resolution: '720p'}})})
        console.log(this.state)
    }

    render() {
        return (
        <div> this exists
            <button className="bitrate" onClick={()=>{this.setState({settings:{...this.state.settings, bitrate: 12}}); console.log(this.state)}}> bitrate</button>
            <button className="resolution" onClick={this.setResolution}> resolution</button>
        </div>)
    }

}

export default YouTubeDebugger