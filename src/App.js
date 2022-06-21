import { useState } from "react";

const App = () => {
   const [open, setOpen] = useState(false);
   const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
   ];
  return (
    <div className="flex bg-black">
      <div
        className={`${open ? "md:w-30" : "md:w-20"} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
        <img alt="control"
          src={require('./assets/control.png')}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
           onClick= {() => setOpen(!open)}
          />
          <div className= "flex gap-x-4 items-center">
            <img src={require('./assets/logo.png')} className= {`cursor-pointer items-center duration-500 ${!open && "rotate-180" }`} />
          </div>
        <ul className= "pt-6">
            {Menus.map((menu,index) => (
          <li key={index} className={`text-gray-300 text-sm flex items-center
          gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
          ${menu.gap ? "mt-9" : "my-2"}`}
          >
            
            <img src={require(`./assets/${menu.src}.png`)}   />
            <span className={`${!open && `hidden`} origin-left duration-200`}> {menu.title}</span>
            </li>
        ))}
      </ul>
      
      </div>
      
     <div className="h-screen flex-1 p-7">
        <img alt= "Spacevent" src= {require('./assets/Frame 14.png')} className= "object-contain h-12 w-30 "/>
        <li className="h-screen items-center flex-1 p-4">
        <img src={require('./assets/20220621_120453.png')}
        className="md:w-[700px] md:h-[393.75px] items-center rounded-[31px] object-cover border border-white" />
        <button class="mt-9 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>
      </li>
      </div> 

      
    </div>
  );
};
export default App;
