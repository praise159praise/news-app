import React, { useState, useEffect } from 'react';
import "./carousel.css"
import Flickity from 'react-flickity-component'
import 'flickity/dist/flickity.pkgd.js'
import 'flickity/dist/flickity.min.css'
import 'boxicons'


const Carousel = () => {
    const settings = {
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false,
        autoPlay:3000,
        fade: true,
        initialIndex: 2
      };
      const simpleImage = {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay:3000,
        fade: true,
        initialIndex: 2
      }

      const [error, setError] = useState(null)
      const [isLoaded, setIsLoaded] = useState(false)
      const [data, setData] = useState([])

      useEffect(() => {
          fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=56oiZIl2QZoFGxhcrLnvf6YFVtnjJMsJ')
            .then(res =>  res.json())
            .then(
                (res) => {
                    setIsLoaded(true)
                    setData(res.results)
                    console.log(res)
                },
                (error) => {
                    setIsLoaded(true)
                    setData(error)
                }
            )
      },
        []
      )

      if(error){
          return <div>Error: {error.message}</div>
      } else if(!isLoaded){
          return <div>Loading...</div>
      }else{
    return (
        <div className="carousel-body">
            <Flickity className="carousel" 
                    delementType={'div'} // default 'div'
                    options={settings} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
            >
                {data?.map(datas => (
                    <div className="carousel-cell">
                    <div className="top-news" >
                        <p>{datas.title}</p>
                        
                        
                            
                            {/* <Flickity
                             className="carousel"
                            delementType={'div'} // default 'div'
                            options={simpleImage} // takes flickity options {}
                            disableImagesLoaded={false} // default false
                            reloadOnUpdate // default false
                            static // default false
                            > */}
                            {datas.multimedia.map(multimedia => (
                                <img src={multimedia.url}  />
                                ))}
                            {/* </Flickity> */}
                           
                      
                        
                        <div>
                        <p>{datas.abstract}</p>
                        <i class="bx bx-grid-small"></i>
                        </div>
                        
                    </div>
                    
                </div>
                ))}
               
            </Flickity>
        </div>
    )
      }
}

export default Carousel
