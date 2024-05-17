import React, { useState } from 'react';
import './Bài 11+12.css'; 

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Code', completed: false },
    { id: 2, title: 'Quét nhà', completed: false },
    { id: 3, title: 'Giặt quần áo', completed: false },
    { id: 4, title: 'Lau nhà', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const addTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos([...todos, { id: newId, title: newTodo, completed: false }]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompletion = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const openModal = (todo: Todo) => {
    setCurrentTodo(todo);
    setModalOpen(true);
  };

  const saveTodo = () => {
    if (currentTodo) {
      const updatedTodos = todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo } : todo
      );
      setTodos(updatedTodos);
      setModalOpen(false);
    }
  };

  const allCompleted = todos.every(todo => todo.completed);

  return (
    <div className="container">
      <h1>Danh sách công việc</h1>
      <div className="inputContainer">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập tên công việc"
          className="input"
        />
        <button onClick={addTodo} className="addButton">Thêm</button>
      </div>
      <ul className="list">
        {todos.map(todo => (
          <li key={todo.id} className={`todoItem ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
              className="checkbox"
            />
            <span className="todoText">{todo.title}</span>
            <div className="buttonContainer">
              <button onClick={() => openModal(todo)} className="editButton">Sửa</button>
              <button onClick={() => deleteTodo(todo.id)} className="deleteButton">Xóa</button>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && currentTodo && (
        <div className="modal">
          <input type="text" value={currentTodo.title} onChange={(e) => setCurrentTodo({ ...currentTodo, title: e.target.value })} className="modalInput" />
          <button onClick={saveTodo} className="saveButton">Lưu</button>
          <button onClick={() => setModalOpen(false)} className="closeButton">Đóng</button>
        </div>
      )}
      <div className="completionStatus">
        {todos.filter(todo => todo.completed).length} / {todos.length} công việc đã hoàn thành
      </div>
      {allCompleted && <div className="allCompletedNotification">Hoàn thành công việc</div>}
    </div>
  );
};

export default TodoList;
