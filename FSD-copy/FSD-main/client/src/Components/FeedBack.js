import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export default function FeedBack() {
  const navigate = useNavigate();

	const [Rollno, setRollno] = useState('')
	const [feedback, setfeedback] = useState('')
	
  async function addFeedback(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/Feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Rollno,
				feedback
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/Feedback')
		}
	}


  return (
    <div>
      <form >
        <div className="container my-5">
         <textarea id="inputtext" rows="1" cols="70" placeholder="Roll No" value={Rollno} onChange={(e) => setRollno(e.target.value)}></textarea>
         <p></p>
            <textarea id="inputtext" rows="7" cols="70" placeholder="Write your FeedBack" value={feedback} onChange={(e) => setfeedback(e.target.value)}></textarea>
            <p> </p>
            <button onClick={(e) => addFeedback(e)} className="btn btn-primary my-3" >Send</button>
        </div>
        </form>
    </div>
  )
}
