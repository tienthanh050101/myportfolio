import TodoList from '@/components/todolist/todolist';

export default function TodoListPage() {
  return (
    <div className="flex flex-col items-center w-full text-gray-800">
      <section id="todolist">
        <TodoList />
      </section>
    </div>
  );
}