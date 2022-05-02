import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [messageList, setMessageList] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const addMessage= () =>{
      let random = Math.random()
      setMessageList([...messageList, {
        title: title, author: author, id:random
      }])
    };

    useEffect( () =>{
        setTimeout(()=>{
          if (messageList.length > 0) {
            alert('Сообщение отправлено')
          }
        }, 2000)
    }, [messageList])

  return (
    <div  class = 'mesList container'>
      <input value={title} onChange={(event)=> setTitle(event.target.value)}/>
        <input value={author} onChange={(event) => setAuthor(event.target.value)}/>
          <button style={{ color: "red", marginLeft: '20px' }} onClick={addMessage}>Отправить сообщение</button>
        {messageList.map((item)=>{
          return(
            <div key={item.id} class='mesList1'>
              <div style={{ color: 'bisque'}}>
                {item.title}
              </div>
              <div style={{ color: 'black', marginTop: '10px'}}>
                {item.author}
              </div>
            </div>
        )
      })}
    </div>
  );
}

export default App;
