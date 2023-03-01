import * as C from './app.styles';
import { useState } from 'react';
import {Item} from './types/Item';
import {ListItem}from './components/ListItem';
import { AddArea } from './components/AddArea';

 const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id: 1,
    name: 'Comprar um Pão na Padaria', 
    done: false},
    {id: 2,
    name: 'Fazer compras no Mercado', 
    done: true},
  ]);
  // Função feita para tarefinha de casa.
  const hanlderTaskChange = (id:number, done: boolean) =>{
    let newList = [...list];
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList)
  }
 
  const handlerAddTask =(taskName : string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }
  return(
    <C.Container> 
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>
        <AddArea onEnter={handlerAddTask}/>
        {list.map((item,index)=>(
            <div>
              <ListItem key={index}  item={item} onChange={hanlderTaskChange}/>
            </div>
          ))}
      </C.Area>
    </C.Container>
  )
}

export default App;