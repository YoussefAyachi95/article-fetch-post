import React, { useState } from 'react'   
import './styles/SendArticle.css'

export default function SendArticle() {

    const randomNum = (Math.floor(Math.random() * 100) + 1).toString();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newArticle = {author, title, body, id: randomNum, imgUrl: `https://picsum.photos/id/${randomNum}/200/300`};

        setIsPending(true)

        fetch('http://localhost:4000/articles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newArticle)
        }).then(() => {
            console.log("New article added");
            setIsPending(false)
        }).catch(error => {
          (<div>
            <h1>{error.message}</h1>
          </div>)
         })
    };
   

  return ( 
    <>
  <div id="form-main">
  <div id="form-div">
    <form className="form" id="form1">
      
      <p className="name">
        <input name="name" value={author} onChange={(e) =>
          setAuthor(e.target.value)
        } type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
      </p>
      
      <p className="email">
        <input name="email" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Title" />
      </p>
      
      <p className="text">
        <textarea name="text" value={body} onChange={(e) => {
          setBody(e.target.value);
        }}  className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Write your article"></textarea>
      </p>
      
      
      <div className="submit">
        <input type="submit" value="SEND" id="button-blue" onClick={handleSubmit}/>
        <div className="ease"></div>
      </div>
    </form>
  </div>
  </div> 
  </> 
  )
}
