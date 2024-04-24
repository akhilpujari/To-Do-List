const todo = [] 
    function render(){
      let htmlll = ''
      for(let i = 0 ;i<todo.length;i++){
      const todoobject = todo[i]
      //const name = todoobject.name
     // const duedate = todoobject.duedate
     const {name , duedate} = todoobject
        let html = `<div>${name}</div> 
        <div>${duedate}</div>
          <button onclick = " todo.splice(${i},1);
          render();" class = "deletebutton" >
          Delete
          </button>
          `
        htmlll+=html;
      }
     document.querySelector(".dic").innerHTML = htmlll
    }
  function addto(){
    const x = document.querySelector(".input")
    const y = document.querySelector(".js-date")
    todo.push({
      name : x.value,
      duedate : y.value
    })
    x.value= ''
    y.value = ''
    render()
 }