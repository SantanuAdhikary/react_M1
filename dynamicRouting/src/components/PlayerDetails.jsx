import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PlayerDetails = () => {


       let players =  [
  {
    "id": 1,
    "name": "Virat Kohli",
    "imageLink": "https://media.gettyimages.com/id/2155703033/photo/new-york-new-york-virat-kohli-of-india-poses-for-a-portrait-prior-to-the-icc-mens-t20-cricket.jpg?s=612x612&w=gi&k=20&c=5Q935_lK4Ay33T2Z4cm67MactnMbnonB-HhPw5ka7WI=",
    "description": "Virat Kohli is a former captain of the Indian national team and one of the best batsmen in the world. Known for his aggressive style and consistency across all formats."
  },
  {
    "id": 2,
    "name": "Rohit Sharma",
    "imageLink": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
    "description": "Rohit Sharma is the current captain of India in all formats. Famous for his elegant batting and the record of three double centuries in ODIs."
  },
  {
    "id": 3,
    "name": "Jasprit Bumrah",
    "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9_FPr_zoRrYgE1ZhCqHJbEhRuxIOEcZrAg&s",
    "description": "Jasprit Bumrah is India's leading fast bowler known for his deadly yorkers and ability to perform under pressure, especially in the death overs."
  },
  {
    "id": 4,
    "name": "Ravindra Jadeja",
    "imageLink": "https://upload.wikimedia.org/wikipedia/commons/2/2c/PM_Shri_Narendra_Modi_with_Ravindra_Jadeja_%28Cropped%29.jpg",
    "description": "An all-rounder with sharp fielding skills, Jadeja is known for his left-arm spin and match-winning batting performances."
  },
  {
    "id": 5,
    "name": "KL Rahul",
    "imageLink": "https://i.pinimg.com/474x/48/37/af/4837af17a9f1bf260a2a1065332d9cd1.jpg",
    "description": "KL Rahul is a top-order batsman and wicketkeeper with versatility across all formats. Known for his composure and technique."
  }
]

   let params = useParams()
   console.log(params)
   let {playerId} = params

   let navigate =  useNavigate()

   let previous =()=>{
    navigate(-1)
   }


   let player = players[playerId-1]
 
  return (
    <div className='playerMain'>

        <div className="inner">
        
            <img src={player.imageLink} alt="" />
           <h2> player name : {player.name}</h2>
           <h3> Description : {player.description}</h3>
           <button onClick={previous}> previous</button>

        </div>
         </div>
  )
}

export default PlayerDetails