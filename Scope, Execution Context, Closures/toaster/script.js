// closures project -
// toaster 

function createToaster(config){
    return function(notification){
        let div = document.createElement("div");
        // div.className = "fixed bg-gray-800 text-white px-6 py-3 rounded shadows-lg pointer-events-none ";

        div.className =`fixed ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadows-lg pointer-events-none ${config.postionX === "right" ? "right-10" : "left-10"} ${config.postionX === "top" ? "top -10" : "bottom-10"}` ;
        div.textContent = notification;
        document.body.appendChild(div);
        setTimeout(() => {
            document.body.removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    // postionX: "right",
    postionX: "left",
    postionY: "top",
    // theme: "dark",
    theme: "light",
    duration: 3,
});

toaster("This is a dummy notification");
// toaster("some interesting notification"); handling it