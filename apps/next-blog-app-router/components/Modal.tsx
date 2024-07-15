import { ReactNode } from "react";

function Modal({ children }: { children: ReactNode }) {
  return (
    <div
      id="modal"
      className="fixed z-50 inset-0 overflow-y-auto h-full w-full px-4 modal"
    >
      <div className="relative top-72 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
          <h3>Modal header</h3>
          <button>x</button>
        </div>
        <div className="max-h-48 overflow-y-scroll p-4">{children}</div>
        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Close (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
