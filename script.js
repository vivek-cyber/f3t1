const name=document.getElementById("name")
const profession=document.getElementById("profession")
const age=document.getElementById("age")
const adduser=document.getElementById("adduser")
const message=document.getElementById("message")
const list=document.getElementById("list")
var data=[]

//button to add user into the data
adduser.addEventListener("click",check)



//to check if user given all 3 inputs or nor
function check()
{
    if(name.value.trim()==""||profession.value.trim()==""||age.value.trim()=="")
    {
        message.innerText=""
        message.innerText="Error: Please Make sure All the fields are filled before adding in an employee!"
        message.style.color="red"
    }
    else{
        message.innerText=""
        message.innerText="Success : Employee Added!"
        message.style.color="green"
        let obj1={}
        
        obj1.id=`${data.length+1}`
        
        console.log(obj1.id)
        obj1.name=name.value
        obj1.profession=profession.value
        obj1.age=age.value
        data.push(obj1)
        console.log(obj1)
        add(obj1.id,name.value,profession.value,age.value)
    }
}

//function to add data into array and dipslay it in html
function add(id1,name1,profession1,age1)
{
    
    let person=document.createElement("div")
    person.className="person "+`${id1}`
    person.id="person "+`${id1}`
    console.log(person.className)

    let persondata=document.createElement("div")
    persondata.className="persondata"

    let id=document.createElement("div")
    id.className="id"
    id.innerText=id1+"."
    persondata.append(id)


    let info2=document.createElement("div")
    info2.className="info2"
    info2.innerText="Name : "+name1
    persondata.append(info2)

    let info3=document.createElement("div")
    info3.className="info3"
    info3.innerText="Profession : "+profession1
    persondata.append(info3)    

    let info4=document.createElement("div")
    info4.className="info4"
    info4.innerText="Age : "+age1
    persondata.append(info4)

    person.append(persondata)

    let deletebtn=document.createElement("button")
    deletebtn.className="delete "+`${id1}`
    console.log(deletebtn.className)
    deletebtn.innerText="Delete User"
    deletebtn.addEventListener("click",delfunc)
    person.append(deletebtn)


    list.append(person)
}


//delete the data from the screen and the array
function delfunc(event)
{
    console.log(event.target)

    let tempid=`${event.target.className.replace("delete ","")}`
    let temp=`person `+`${event.target.className.replace("delete ","")}`
    console.log(temp)
    let tempdiv=document.getElementById(temp)
    console.log(tempdiv)
    tempdiv.remove()
    // remove from list array also
    console.log(data)
    delete data[tempid-1]
    console.log(data)
}

