import React from "react";
import cn from 'classnames';

export default class Carousel extends React.Component{
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.state = { 
      currentIdx: 0,
      images: images.map((url, index) => ({url: url, key: index}))
    };
  }

  showPrev = (event) => {
    event.preventDefault();
    const { currentIdx, images} = this.state;
    const prevIdx = ((currentIdx + (images.length - 1)) % images.length);
    /* console.log('(0 + (3 - 1)) % 3):', (0 + (3 - 1)) % 3);
    console.log('(1 + (3 - 1)) % 3):', (1 + (3 - 1)) % 3);
    console.log('(2 + (3 - 1)) % 3):', (2 + (3 - 1)) % 3);
    console.log(prevIdx) */
    this.setState({currentIdx: prevIdx})
  }
  showNext = (event) => {
    event.preventDefault();
    const { currentIdx, images} = this.state;
    const nextIdx = ((currentIdx + 1) % images.length);
    /* console.log('(0 + 1) % 3):', (0 + 1) % 3);
    console.log('(1 + 1) % 3):', (1 + 1) % 3);
    console.log('(2 + 1) % 3):', (2 + 1) % 3);
    console.log(nextIdx) */
    this.setState({currentIdx: nextIdx})
  }

  render() {
    const { currentIdx, images} = this.state;
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {
            images.map(({ url, key }, index) => {
              const classes = cn({"carousel-item": true, active: currentIdx === index})
              return (
                <div className={classes} key={key}>
                  <img src={url} alt="" />
                </div>
              )
            })
          }
        </div>
        <a 
          href="#carousel" 
          className="carousel-control-prev" 
          role="button" 
          data-slide="prev"
          onClick={this.showPrev}
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previos</span>
        </a>
        <a 
          href="#carousel" 
          className="carousel-control-next" 
          role="button" 
          data-slide="next"
          onClick={this.showNext}
        >
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}