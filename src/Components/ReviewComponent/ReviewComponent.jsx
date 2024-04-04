import React from 'react'
import "./module.review.css"
import ReviewImg from '../../assets/images/reviewimg.svg';
import Panadol from '../../assets/images/Panadol.svg';
import star from "../../assets/images/star.svg"
import { ReviewData } from '../ComponentsData';
const ReviewComponent = () => {
  return (
    <>
    {ReviewData.map((item)=>(

<article className='review-main-container'>
          <header className='review-top-section'>
            <img src={item.profilePicture} alt=""  className='review-top-img'/>
             <div className='review-top-text'>
            <h5>{item.username}</h5>
            <p>{`year ${item.yearJoined}`}</p>  
            </div>
          </header>

          <main className='review-bottom-section'>
           <div className='review-bottom-image-text'>
            <img src={item.drugImage} alt="" className='review-bottom-img-main' />
            <div className='review-bottom-text'>
              <h5>{item.drugName}</h5>
              <div className="review-bottom-image-text-sec">
              
              <img src={star} />
              <p>{item.rating}</p>
              </div>
              
              <p>{`year ${item.yearCreated}`}</p>  
            </div>
           </div>
            <p className='review-bottom'>
              {item.Comment}
            </p>
          </main>  
        </article>

    ))}
       
    </>
  )
}

export default ReviewComponent