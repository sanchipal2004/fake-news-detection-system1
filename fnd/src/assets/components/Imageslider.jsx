import React from 'react'
import './Imageslider.css'
const Imageslider = () => {
  const slides=[
    {
   img: "https://english.cdn.zeenews.com/sites/default/files/2025/10/18/1848257-roko-2025-10-18t070244.227.png?im=FitAndFill=(800,600)",
   text:"India Vs Australia 2025: Full ODI Series Preview; Rohit Sharma And Virat Kohli Comeback, Match Venues, Timings And Conditions - All You Need To Know"
     }, 
     {img:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2025/10/17/1848122-gold-2.jpg?im=FitAndFill=(424,318)",
     text:"Gold Prices On Dhanteras 2025: Check The Latest 22-Carat, 24-Carat Rates In Major Indian Cities"
     },
     {img:"https://c.ndtvimg.com/2024-09/60vlj6u_rss-generic_625x300_05_September_24.jpg?im=FeatureCrop,algorithm=dnn,width=250,height=188",
     text:"Karnataka Officer Suspended For Attending RSS Event, BJP Hits Out At Congress"
     } ,
     {img:"https://c.ndtvimg.com/2025-10/b2talivs_police-van_625x300_09_October_25.jpg?im=FitAndFill,algorithm=dnn,width=250,height=188",
    text:"Telangana Tuition Teacher, 60, Jailed For Raping 12-Year-Old Student"
  },
    {img:"https://c.ndtvimg.com/2025-10/o7i9148k_donald-trump_625x300_17_October_25.jpg?im=FeatureCrop,algorithm=dnn,width=250,height=188",
    text:"'Pak Attacked Afghanistan': What Trump Said On Brokering Peace"
  },
  {img:"https://c.ndtvimg.com/2025-10/dab7c4a7_Apple-Vision-Pro-M5-and-R1-chips-251015big.jpg.large2x.jpeg?downsize=250:188",
  text:"Weekly Tech Wrap: Apple Launches M5 iPad Pro, Microsoft Stops Windows 10 Support, More"
},
{img:"https://c.ndtvimg.com/2024-08/qml63blg_bharat-bandh-2024_625x300_21_August_24.jpg?im=FeatureCrop,algorithm=dnn,width=250,height=188",
text:"Telangana Bandh Today Over Backward Classes Reservation Issue" 
},
{img:"https://c.ndtvimg.com/2025-10/c4379230_442139528.jpeg?downsize=250:188",
text:"Tesla Shareholders Should Reject Musk’s $1 Trillion Pay Package, ISS Advises" 
}
  ];
 
  return (
    <div>
      <div className="slider-container  ">
        
        <div className="slider  ">
      
          {slides.map((slide,index)=>(
          <div key={index} className="slide">
            <img  src={slide.img} alt={`slide-${index}`}/>
            <div className="heading">{slide.text}</div>
             </div>
        ))}
       
        </div>
        
      </div>

    </div>
  )
}

export default Imageslider

