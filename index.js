let arr = ["", "", "",
    "", "", "",
    "", "", ""];

let count = 0;

function input(num) {
    
    let item = Array.from(document.getElementsByClassName('item'));
    item.forEach((element, index) => {
        if (num === index) {
            let input = item[index].getElementsByTagName('h2')[0];
            if (input.innerHTML === "") {
                if (count % 2 === 0) {
                    input.innerHTML = "X";
                    new Audio("sound.wav").play();
                    arr[index] = input.innerHTML;
                    count = count + 1;
                } else {
                    input.innerHTML = "O";
                    new Audio("sound.wav").play();
                    arr[index] = input.innerHTML;
                    count = count + 1;
                }
            }
        }

    })
    
    if (arr[0] !== "" && arr[1] !== "" && arr[2] !== "") {
        if (arr[0] === arr[1] && arr[1] === arr[2]) {
            
            swal("Good job!", `Congratulation ${arr[0]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
            
        }
    }
    
    if (arr[0] !== "" && arr[3] !== "" && arr[6] !== "") {
        if (arr[0] === arr[3] && arr[3] === arr[6]) {

            swal("Good job!", `Congratulation ${arr[0]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[0] !== "" && arr[4] !== "" && arr[8] !== "") {
        if (arr[0] === arr[4] && arr[4] === arr[8]) {
            swal("Good job!", `Congratulation ${arr[0]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[3] !== "" && arr[4] !== "" && arr[5] !== "") {
        if (arr[3] === arr[4] && arr[4] === arr[5]) {
            swal("Good job!", `Congratulation ${arr[3]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[6] !== "" && arr[7] !== "" && arr[8] !== "") {
        if (arr[6] === arr[7] && arr[7] === arr[8]) {
            swal("Good job!", `Congratulation ${arr[6]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[6] !== "" && arr[4] !== "" && arr[2] !== "") {
        if (arr[6] === arr[4] && arr[4] === arr[2]) {
            swal("Good job!", `Congratulation ${arr[6]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[6] !== "" && arr[4] !== "" && arr[2] !== "") {
        if (arr[6] === arr[4] && arr[4] === arr[2]) {
            swal("Good job!", `Congratulation ${arr[6]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[1] !== "" && arr[4] !== "" && arr[7] !== "") {
        if (arr[1] === arr[4] && arr[4] === arr[7]) {
            swal("Good job!", `Congratulation ${arr[1]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    }
    if (arr[2] !== "" && arr[5] !== "" && arr[8] !== "") {
        if (arr[2] === arr[5] && arr[5] === arr[8]) {
            swal("Good job!", `Congratulation ${arr[2]} is Win`, "success");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
        }
    } if (arr[0] !== "" && arr[01] !== "" && arr[2] !== "" && arr[3] !== "" && arr[4] !== "" && arr[5] !== "" && arr[6] !== "" && arr[7] !== "" && arr[8] !== "") {
        swal("Game is Tie!", "Try Again!");
            setTimeout(() => {
                item.forEach((element, index) => {
                    let input = item[index].getElementsByTagName('h2')[0];
                    input.innerHTML = "";
                })
                
            }, 1000)

            arr = ["", "", "", "", "", "", "", "", ""];
            
            return;
    }

    
}

