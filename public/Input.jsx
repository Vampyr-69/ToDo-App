export function Input({ handleInput, addToDo, input }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="flex justify-center mt-25 gap-2"
    >
      <input
        onChange={handleInput}
        className="text-gray-700 bg-gray-100 rounded placeholder:text-center w-60 p-2 hover:scale-110 hover:mr-3 outline-0 hover:bg-gray-300"
        type="text"
        placeholder="Add Todo"
        value={input}
      />
      <button
        onClick={addToDo}
        className="border-0 p-2 rounded-sm bg-purple-800 w-10 hover:cursor-pointer hover:bg-purple-600 hover:scale-110"
      >
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z" />
        </svg>
      </button>
    </form>
  );
}
