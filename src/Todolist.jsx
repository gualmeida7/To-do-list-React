import React, { useState , useEffect } from "react";
import "./Todolist.css";
import Icone from './assets/icon.webp';

function Todolist() {
    const listaStorage = localStorage.getItem('Lista');


    const[Lista, setlista] = useState(listaStorage ? JSON.parse(listaStorage) : [] );
    const [novoItem, setNovoItem] = useState("");

    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(Lista));
    }, [Lista])

    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem) {
            return;
        }
        setlista([...Lista, {text: novoItem, isCompleted: false}])
        setNovoItem('')
        document.getElementById('input-entrada').focus();
    }

    function clicou(index) {
        const listaux = [...Lista];
        listaux[index].isCompleted = !listaux[index].isCompleted;
        setlista(listaux);
    }

    function deleta(index) {
        const listaux = [...Lista];
        listaux.splice(index,1);
        setlista(listaux);
    }
    
    function deletatudo() {
        setlista ([]);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
        <form onSubmit={adicionaItem}>
            <input 
            id="input-entrada"
            type="text"
            value ={novoItem}
            onChange={(e)=>{setNovoItem(e.target.value)}} 
            placeholder="Adicione uma tarefa" 
            />
            <button className="add" type="submit">Add</button>
        </form>
        <div className="ListaTarefas">
        <div style={{ textAllign : 'center'}}>
            {
                Lista.length < 1
                ?
                <img className="icone" src={Icone} />
                :
                Lista.map((item, index)=>(
                <div 
                key={index}
                className={item.isCompleted ? "item completo" : "item"}>
            <span onClick={()=>{clicou(index)}}>{item.text}</span>
            <button className="del" onClick={()=>{deleta(index)}}>Deletar</button>
            </div>
    ))
            }
            {
                Lista.length > 0 && 
                <button className="delALL" onClick={()=>{deletatudo()}}>Deletar todas</button>
            }

            </div>
        
        </div>  
        </div>
        

    )
}

export default Todolist