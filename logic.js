let todos = [];
      function addTodo() {
        todos.push({
          title: document.querySelector("input").value
        })
        document.querySelector("input").value="";
        render();
      }
  
      function deleteTodo(todo) {
        const index = todos.indexOf(todo);
        if(index > -1)
          todos.splice(index,1);
        render();
      }
      function taskCompleted(todo){
        const index = todos.indexOf(todo);
        const h4 = document.querySelector(`#todo-${index} h4`);
        h4.style.textDecoration = "line-through";
        setTimeout(() => {
          deleteTodo(todo)
        }, 2000);
      }
      function createNode(todo){
            const index = todos.indexOf(todo);

            const div = document.createElement("div");
            div.setAttribute("id",`todo-${index}`);
            
            const h4 = document.createElement("h4");
            const btn = document.createElement("button");
            const btn2= document.createElement("button");
            h4.innerHTML = todo.title;
            btn.innerHTML= "Delete";
            btn.setAttribute("id","del");
            btn2.setAttribute("id","done")
            btn.onclick = () => deleteTodo(todo);
            btn2.innerHTML="Done";
            btn2.onclick = () => taskCompleted(todo);
            // btn.setAttribute("onclick","deleteTodo(todo)");
            // btn2.setAttribute("onclick","taskCompleted(todo)");
            div.append(h4);
            div.append(btn);
            div.append(btn2);
            return div;
      }
      function render() {
        const todocontainer= document.getElementById("todos");
        todocontainer.innerHTML = "";
        for(let i=0;i<todos.length;i++){
          const todo= todos[i];
        const newTodo = createNode(todo);
        todocontainer.appendChild(newTodo);
      }
    }