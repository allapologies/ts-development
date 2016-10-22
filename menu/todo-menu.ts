'use strict'

type menuItem = { title: string, items?: menuItem[] }
type menuList = { title: string, items?: menuItem[]}[]

let menu: menuList = [
    {
        title: 'Infernum', items: [
        {
            title: 'Ascensionе', items: [
            {title: 'Tubingaы', items: [
                    {title: 'Buboе'},
                    {title: 'Nixus'},
                    {title: 'Wonderland', items: [
                            {title: 'Gandavum'},
                            {title: 'Antverpi'}
                        ]
                    },
                    {title: 'Love'}
                ]
            },
            {title: 'Chremisa'},
            {title: 'Heu, extum!'},
            {title: 'Oddly'}
        ]
        },
        {
            title: 'Danista', items: [
            {title: 'Quadrata'},
            {title: 'Hafnia'},
            {title: 'Lentia'},
        ],
        },
    ]
    },
    {
        title: 'Elevatus', items: [
        {
            title: 'Ubi est', items: [
            {title: 'Adiurator'},
            {title: 'Spatii'}
        ]
        },
        {
            title: 'Calceus', items: [
            {title: 'Caculas'}
        ]
        },
    ]
    }
]


function generateMenu(list: menuList):string {
    let z: string = `<ul>`
    for (let listItem of list) {
        z += `<li><a class='title'>${listItem.title}</a>`
        if (listItem.items) {
            z += generateMenu(listItem.items)
        }
        z+=`</li>`
    }
    z += `</ul>`

    return z
}


let navMenuList = document.querySelector('.menu') as HTMLElement;
navMenuList.innerHTML = generateMenu(menu);

navMenuList.onclick = (e: MouseEvent)=> {
    let el = e.target as HTMLElement;
    let classList = el.classList;
    if (classList.contains('title')) {
        let parentLi = el.parentNode as HTMLElement;
        parentLi.classList.toggle('menu-open')
    }
};