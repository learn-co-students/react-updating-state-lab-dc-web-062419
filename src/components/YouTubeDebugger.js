// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

    constructor(){
        super()
        this.state = {
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

    handleBitrate = () => {
        console.log('hit')
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleRes = () => {
        console.log('hit')
        this.setState({
            ...this.state,
            settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
        })
    }

    render(){
        return(
            <div>
            <button onClick={this.handleBitrate} className='bitrate'>bitrate {this.state.settings.bitrate}</button>
            <button onClick={this.handleRes} className='resolution'>resolution {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger