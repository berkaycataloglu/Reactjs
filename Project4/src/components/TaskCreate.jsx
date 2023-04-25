import { useState } from 'react';

function CreateTask({onCreate}) {

    const [title, setTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title, taskDesc)
        setTitle('')
        setTaskDesc('')
    }
    
    return ( 
        <div className="task-create">
            <h3>Lütfen Task Ekleyiniz!</h3>
            <form className="task-form">
                <label className="task-label">Başlık</label>
                <input value={title} onChange={handleChange} className="task-input"/>
                <label className="task-label">Task Giriniz!</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/> 
                <button className="task-button" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>
     );
}

//! text area içindeki rows kullanımı aşağı doğru kaç satır büyüklüğünde olucağını gösterir bize

export default CreateTask;