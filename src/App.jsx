import { useState } from 'react'
import './App.css'
import Backoffer from './Backoffer'

const cards = [
  {
    icon: "./Main1.png",
    heading: "Creative Designer Combo pack",
    company: [
      {
        icon: "./Icon11.png",
        title: "Adobe Illustrator"
      },
      {
        icon: "./Icon12.png",
        title: "Adobe Photoshop"
      },
      {
        icon: "./Icon13.png",
        title: "Figma"
      },
      {
        icon: "./Icon14.png",
        title: "Adobe Premier pro"
      }
    ],
    price: "₹1,499",
    discount: "₹2,796",
    off: "40% OFF "
  },
  {
    icon: "./Main2.png",
    heading: "Data Scientist Combo Pack ",
    company: [
      {
        icon: "./Icon21.png",
        title: "SQL"
      },
      {
        icon: "./Icon22.png",
        title: "Machine learning"
      },
      {
        icon: "./Icon23.png",
        title: "Python"
      },
      {
        icon: "./Icon24.png",
        title: "DSA With Python"
      },
      {
        icon: "./Icon25.png",
        title: "Data Science"
      }
    ],
    price: "₹1,499",
    discount: "₹2,796",
    off: "40% OFF "
  },
  {
    icon: "./Main3.png",
    heading: "App developer Combo pack ",
    company: [
      {
        icon: "./Icon31.png",
        title: "JAVA"
      },
      {
        icon: "./Icon32.png",
        title: "Flutter"
      },
      {
        icon: "./Icon33.png",
        title: "React Native "
      },
      {
        icon: "./Icon34.png",
        title: "React JS"
      },
      {
        icon: "./Icon35.png",
        title: "App develop"
      }
    ],
    price: "₹1,499",
    discount: "₹2,796",
    off: "40% OFF "
  },
  {
    icon: "./Main1.png",
    heading: "Full Stack Combo pack ",
    company: [
      {
        icon: "./Icon41.png",
        title: "MERN"
      },
      {
        icon: "./Icon42.png",
        title: "React JS"
      },
      {
        icon: "./Icon43.png",
        title: "DSA With Python"
      },
      {
        icon: "./Icon44.png",
        title: "DevOPS"
      },
      {
        icon: "./Icon45.png",
        title: "Python"
      },
      {
        icon: "./Icon46.png",
        title: "DBMS"
      }
    ],
    price: "₹1,499",
    discount: "₹2,796",
    off: "40% OFF "
  },
  {
    icon: "./Main2.png",
    heading: "Business Combo pack",
    company: [
      {
        icon: "./Icon51.png",
        title: "Stock Market"
      },
      {
        icon: "./Icon52.png",
        title: "FRM"
      },
      {
        icon: "./Icon53.png",
        title: "Technical Research"
      },
      {
        icon: "./Icon54.png",
        title: "Financial Modelling valuation"
      }
    ],
    price: "₹1,499",
    discount: "₹2,796",
    off: "40% OFF "
  },
  {
    icon: "./Main3.png",
    heading: "Tech Geek Combo pack",
    company: [
      {
        icon: "./Icon61.png",
        title: "Python"
      },
      {
        icon: "./Icon62.png",
        title: "App develop"
      },
      {
        icon: "./Icon63.png",
        title: "Ethical Hacking"
      },
      {
        icon: "./Icon64.png",
        title: "JAVA"
      },
      {
        icon: "./Icon65.png",
        title: "Data Science"
      },
      {
        icon: "./Icon66.png",
        title: "MERN"
      }
    ],
    price: "₹1,499",
    discount: "₹2,796",
    off: "40% OFF "
  }
]
function App() {
  const [count, setCount] = useState(0)
  // console.log(cards[0].company)
  return (
    <>
      <div className="app">
        <h2 className="section-heading card-section-heading">
          <b>Interested</b> in our other courses <b>too ?</b>
        </h2>
        <div className="cards">
          {
            cards.map((card, index) => {
              return (
                <div className="container" key={index}>
                  <div className="card" >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className='svg-card' width="343" height="482" viewBox="0 0 343 482" fill="none">
                    <g opacity="0.4">
                      <path d="M379.545 823.849C433.566 762.299 476.57 692.148 506.102 617.4C535.635 542.651 551.117 464.77 551.664 388.202C552.212 311.635 537.815 237.881 509.294 171.151C480.774 104.421 438.689 46.0219 385.443 -0.711473C332.197 -47.4448 268.831 -81.5975 198.965 -101.22C129.099 -120.842 54.1005 -125.549 -21.7488 -115.072C-97.5982 -104.596 -172.813 -79.1405 -243.098 -40.1603C-313.383 -1.18015 -377.363 50.5618 -431.384 112.111L-25.9195 467.98L379.545 823.849Z" fill="url(#paint0_linear_1_502)" fillOpacity="0.3" />
                      <path d="M369.096 814.678C421.725 754.715 463.621 686.371 492.392 613.549C521.163 540.727 536.246 464.853 536.78 390.259C537.313 315.664 523.287 243.811 495.502 178.8C467.716 113.79 426.716 56.896 374.842 11.367C322.968 -34.1621 261.236 -67.4346 193.17 -86.551C125.104 -105.667 52.0382 -110.253 -21.8565 -100.047C-95.7512 -89.84 -169.027 -65.0409 -237.502 -27.0653C-305.976 10.9104 -368.306 61.3189 -420.935 121.282L-25.9195 467.98L369.096 814.678Z" fill="url(#paint1_linear_1_502)" fillOpacity="0.3" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_1_502" x1="385.443" y1="-0.711473" x2="200.327" y2="177.308" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_1_502" x1="385.443" y1="-0.711473" x2="200.327" y2="177.308" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                    <div className="card-top">
                      <div className="card-main-img">
                        <img src={card.icon} alt={card.heading} />
                      </div>
                      <div className="card-heading">
                        <h3>{card.heading}</h3>
                      </div>
                    </div>
                    <div className="card-middle">
                      {
                        card.company.map((comp, idx) => {
                          return (
                            <div className="card-company" key={`${index} ${idx}`}>
                              <div className="card-company-img">
                                <img src={comp.icon} alt={comp.title} />
                                {/* {comp.icon} */}
                              </div>
                              <p className="card-company-title">{comp.title}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="card-bottom">
                      <div className="card-bottom-price">
                        <p className="card-price">{card.price}</p>
                        <p className="card-discount">{card.discount}</p>
                        <p className="card-off">{card.off}</p>
                      </div>
                      <div className="bottom-validity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                          <mask id="mask0_1_55" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19">
                            <rect y="0.5" width="18" height="18" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1_55)">
                            <path d="M8.25073 13.2496H9.75073V8.74963H8.25073V13.2496ZM9.00073 7.24963C9.21323 7.24963 9.39136 7.17776 9.53511 7.03401C9.67886 6.89026 9.75073 6.71213 9.75073 6.49963C9.75073 6.28713 9.67886 6.10901 9.53511 5.96526C9.39136 5.82151 9.21323 5.74963 9.00073 5.74963C8.78823 5.74963 8.61011 5.82151 8.46636 5.96526C8.32261 6.10901 8.25073 6.28713 8.25073 6.49963C8.25073 6.71213 8.32261 6.89026 8.46636 7.03401C8.61011 7.17776 8.78823 7.24963 9.00073 7.24963ZM9.00073 16.9996C7.96323 16.9996 6.98823 16.8028 6.07573 16.409C5.16323 16.0153 4.36948 15.4809 3.69448 14.8059C3.01948 14.1309 2.48511 13.3371 2.09136 12.4246C1.69761 11.5121 1.50073 10.5371 1.50073 9.49963C1.50073 8.46213 1.69761 7.48713 2.09136 6.57463C2.48511 5.66213 3.01948 4.86838 3.69448 4.19338C4.36948 3.51838 5.16323 2.98401 6.07573 2.59026C6.98823 2.19651 7.96323 1.99963 9.00073 1.99963C10.0382 1.99963 11.0132 2.19651 11.9257 2.59026C12.8382 2.98401 13.632 3.51838 14.307 4.19338C14.982 4.86838 15.5164 5.66213 15.9101 6.57463C16.3039 7.48713 16.5007 8.46213 16.5007 9.49963C16.5007 10.5371 16.3039 11.5121 15.9101 12.4246C15.5164 13.3371 14.982 14.1309 14.307 14.8059C13.632 15.4809 12.8382 16.0153 11.9257 16.409C11.0132 16.8028 10.0382 16.9996 9.00073 16.9996ZM9.00073 15.4996C10.6757 15.4996 12.0945 14.9184 13.257 13.7559C14.4195 12.5934 15.0007 11.1746 15.0007 9.49963C15.0007 7.82463 14.4195 6.40588 13.257 5.24338C12.0945 4.08088 10.6757 3.49963 9.00073 3.49963C7.32573 3.49963 5.90698 4.08088 4.74448 5.24338C3.58198 6.40588 3.00073 7.82463 3.00073 9.49963C3.00073 11.1746 3.58198 12.5934 4.74448 13.7559C5.90698 14.9184 7.32573 15.4996 9.00073 15.4996Z" fill="#800080" fillOpacity="0.87" />
                          </g>
                        </svg>
                        <p className="bottom-validity-para">You get a Refund Validity of <b>2 Years</b></p>
                      </div>
                      <p className="bottom-know">Know More</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Backoffer />
    </>
  )
}

export default App
