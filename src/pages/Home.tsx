import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle !== '') {
      setTasks([...tasks, {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }])
    }
    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {
    const findedIndex = tasks.findIndex(task => task.id === id);
    let newArray = [...tasks];

    newArray[findedIndex] = {
      id: newArray[findedIndex].id,
      title: newArray[findedIndex].title,
      done: newArray[findedIndex].done ? false : true
    }

    setTasks(newArray);
    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}