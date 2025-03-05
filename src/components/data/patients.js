const statuses = {
    a: {
        condition: "Discharged",
        color: "#1ACF65"
    },
    b: {
        condition: "In Recovery",
        color: "#1EABB8"
    },
    c: {
        condition: "Life Support",
        color: "#B81E42"
    }
}

export const patients = [
    {
        name: "Diane Russel",
        idNum: "BC5001",
        caretaker: "Kristin",
        status: statuses.a
    },
    {
        name: "Bob Robertsson",
        idNum: "MK3333",
        caretaker: "Kristin",
        status: statuses.b
    },
    {
        name: "Bessie Cooper",
        idNum: "DO3883",
        caretaker: "Kristin",
        status: statuses.c
    },
    {
        name: "Marvin McKinney",
        idNum: "PO1001",
        caretaker: "Kristin",
        status: statuses.b
    },
    {
        name: "Ester Rob",
        idNum: "AK2211",
        caretaker: "Kristin",
        status: statuses.b
    },
    {
        name: "John Wyatt",
        idNum: "MN5511",
        caretaker: "Kristin",
        status: statuses.a
    },
    {
        name: "Pizza Man",
        idNum: "JU7288",
        caretaker: "Kristin",
        status: statuses.c
    },
    {
        name: "Charlotte Indigo",
        idNum: "RT5834",
        caretaker: "Kristin",
        status: statuses.c
    },
]