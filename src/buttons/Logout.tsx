export function Logout(){

    function destroyStorage(){
        localStorage.clear();
        window.location.reload();
    }

    return(
        <div>
            <button
                        type="button"
                        className=" inline-flex 
                                    items-center 
                                    rounded-md border 
                                    border-white     
                                    bg-[#da6523]
                                    px-4 
                                    py-2 
                                    mr-4
                                    text-sm 
                                    font-medium 
                                    text-white
                                    shadow-sm 
                                    hover:bg-white
                                    hover:text-[#da6523] 
                                    focus:outline-none 
                                    focus:ring-2 
                                    focus:ring-[#da6523]
                                    focus:ring-offset-2"
                                    onClick={destroyStorage}
                    > Deslogar </button>
        </div>
    );
}