var clutter = ""

function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){

        //getting a input

        var input = document.getElementById("txtmsg").value
        console.log(input)

        //getting a password

        var password = document.getElementById("password").value
        console.log(password)


        const str = input.split("")
        console.log(str)

        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });
        console.log(clutter)

        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = clutter
    })


}

encryption();



















function btnClicking(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display =  "block"
        document.querySelector("#encryption").style.display =  "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "180deg"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display =  "block"
        document.querySelector("#decryption").style.display =  "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1 span img").style.rotate = "360deg"
    })
        
    }
    btnClicking();

    /*document.addEventListener("DOMContentLoaded", function() {
        // Select the buttons and add event listeners
        const decBtn = document.querySelector("#dec-btn");
        const encBtn = document.querySelector("#enc-btn");
    
        decBtn.addEventListener("click", function() {
            document.querySelector("#decryption").style.display = "block";
            document.querySelector("#encryption").style.display = "none";
        });
    
        encBtn.addEventListener("click", function() {
            document.querySelector("#encryption").style.display = "block";
            document.querySelector("#decryption").style.display = "none";
        });
    });*/
    
 