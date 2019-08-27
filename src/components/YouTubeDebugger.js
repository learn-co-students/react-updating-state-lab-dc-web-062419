import React, {Component} from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super();
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

    changeBitrateSettings = () => {
        this.setState = ({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeVideoResolution = () => {
        this.setState = ({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button className = 'bitrate' onClick = {this.changeBitrateSettings}>Change Bitrate</button>
                <button className = 'resolution' onClick = {this.changeVideoResolution}>Change Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger