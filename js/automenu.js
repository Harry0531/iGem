// function autoMenu() {
//     let list = document.getElementsByTagName("h2");
//     let listSet = document.createElement("div");
//     listSet.classList.add("list");
//
//     for (let i = 1; i <= list.length; i++) {
//         let item = document.createElement("div");
//         item.classList.add("list-item");
//         item.addEventListener('click', function () {
//             jump(i);
//         });
//         let dot = document.createElement("div");
//         dot.classList.add("list-dot");
//         let text = document.createElement("p");
//         let str = list[i - 1].innerText;
//         if (str.length > 20) {
//             str = str.substr(0, 20);
//             str += '...';
//         }
//         text.innerText = str;
//         item.appendChild(dot);
//         item.appendChild(text);
//         listSet.appendChild(item);
//     }
//
//     let item = document.createElement("div");
//     item.classList.add("list-item");
//     item.addEventListener('click', function () {
//         setHeight(0);
//     });
//     let dot = document.createElement("div");
//     dot.classList.add("list-dot");
//     dot.style.backgroundColor = 'red';
//     let text = document.createElement("p");
//     text.innerText = 'Back to top';
//     item.appendChild(dot);
//     item.appendChild(text);
//     listSet.appendChild(item);
//
//     document.getElementById("autoMenu").appendChild(listSet);
// }
//
// function jump(num) {
//     let h = document.getElementsByTagName("h2");
//     for (let i = 1; i <= h.length; i++) {
//         if (i == num) {
//             setHeight(h[i - 1].offsetTop + 50);
//             break;
//         }
//     }
// }
//
// function setHeight(top) {
//     if (document.documentElement) { // Explorer 6 Strict
//         document.documentElement.scrollTop = Number(top);
//     } else if (document.body) {// all other Explorers
//         document.body.scrollTop = Number(top);
//     }
// }
//
// window.onscroll = function (e) {
//     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//     if (scrollTop > window.innerHeight - 100) {
//         document.getElementById("autoMenu").style.display = 'block';
//     } else {
//         document.getElementById("autoMenu").style.display = 'none';
//     }
// };

function autoMenu() {
    let list = document.getElementsByClassName("el-collapse-item__header");
    console.log(list);
    let listSet = document.createElement("div");
    listSet.classList.add("list");

    for (let i = 1; i <= list.length; i++) {
        let item = document.createElement("div");
        item.classList.add("list-item");
        item.addEventListener('click', function () {
            jump(i);
        });
        let dot = document.createElement("div");
        dot.classList.add("list-dot");
        let text = document.createElement("p");
        let str = list[i - 1].innerText;
        if (str.length > 20) {
            str = str.substr(0, 20);
            str += '...';
        }
        text.innerText = str;
        item.appendChild(dot);
        item.appendChild(text);
        listSet.appendChild(item);
    }

    let item = document.createElement("div");
    item.classList.add("list-item");
    item.addEventListener('click', function () {
        setHeight(0);
    });
    let dot = document.createElement("div");
    dot.classList.add("list-dot");
    dot.style.backgroundColor = 'red';
    let text = document.createElement("p");
    text.innerText = 'Back to top';
    item.appendChild(dot);
    item.appendChild(text);
    listSet.appendChild(item);

    document.getElementById("autoMenu").appendChild(listSet);
}

function jump(num) {
    let h = document.getElementsByClassName("el-collapse-item__header");
    for (let i = 1; i <= h.length; i++) {
        if (i == num) {
            setHeight(h[i - 1].offsetTop + 50);
            break;
        }
    }
}

function setHeight(top) {
    if (document.documentElement) { // Explorer 6 Strict
        document.documentElement.scrollTop = Number(top);
    } else if (document.body) {// all other Explorers
        document.body.scrollTop = Number(top);
    }
}

window.onscroll = function (e) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > window.innerHeight - 100) {
        document.getElementById("autoMenu").style.display = 'block';
    } else {
        document.getElementById("autoMenu").style.display = 'none';
    }
};