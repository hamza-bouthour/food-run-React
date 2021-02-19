import React, { Component } from 'react';
import { Media } from 'reactstrap'
import ReactPlayer from 'react-player'
// import {
//     Card, CardText, CardBody, CardLink,
//     CardTitle, CardSubtitle, Media
//   } from 'reactstrap';


class YoutubeRow extends Component {
    constructor(props) {
        super(props)
        this.state = {     
                part: 'snippet',
                q: null,
                maxResults: 12,
                key: 'AIzaSyCZqOzQqm-MUpftbQEjRR9kqlzF3jTtwKs',
                videoId:   'tAGnKpE4NCI'
        }
    }
    // async getKeyword(newWord) {
    //     console.log(newWord);
    // this.setState({q: newWord},
    //     () => {this.fetchUrl(this.state.q)}
    //     )
    // }
    getQuery(queries) {
        const queryKey = Object.keys(queries).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queries[key])}`)
        return queryKey.join('&');
    }
    componentDidMount() {
         this.setState({q: this.props.query},
            () => {this.fetchUrl(this.state.q)}
            )
    }
    // componentDidUpdate() {
    //     this.setState({videoId: response.items[1].id.videoId})
    // }
    
    async fetchUrl(keyword) {
        if (keyword) {
            const uri = this.getQuery(this.state)
            console.log(uri)
            const url = 'https://www.googleapis.com/youtube/v3/search?' + uri;
            console.log(url)
            await fetch(url)
                .then(response => response.json())
                .then(response => console.log(response))
                .then(response => this.setState({videoId: response.items[1].id.videoId}))  
                .then(response => console.log(response.items[1].id.videoId))      
                .catch(error => {
                console.log(error);    
                });      
        }     
    }
   render() {
    const videoUriX = 'https://www.youtube.com/embed/';
    return (
        // <div className="container mx-auto p-0 col-12">
            
                <div className="row  mx-auto mb-3">
                    <div className="col-12 m-0 p-0">
                    <ReactPlayer className="mw-100" url={this.props.video} />
                        {/* <Media><iframe src={videoUriX + this.state.videoId}/></Media> */}
                        {/* <Media><iframe src='https://www.youtube.com/embed/tAGnKpE4NCI'/></Media> */}
                    </div>
                    {/* <div className="col-12 col-md-3 description-video-box m-0">
                        <p className="video-description">{this.props.data.artist}</p>
                        <p className="video-description">{this.props.data.song}</p>
                        <p className="video-description">Album</p>
                        <p className="video-description">3:57</p>
                        <a className="youtube-link">Watch on Youtube</a>
                    </div>   */}
                </div> 
         
       
    )     
    }       
}             
export default YoutubeRow;

