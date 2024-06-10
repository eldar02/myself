let con = document.getElementById('bas')
const render = ()=>{
    let render = new DocumentFragment

    data.map((ite)=>{
        let div = document.createElement('div')
        div.className="div"
        div.innerHTML=`
                <div class="card" style="width: 18rem; border:1px solid ;">
                    <img src="${ite.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${ite.text}</h5>
                      <p class="card-text">${ite.title}</p>
                      <button href="#" class="btn btn-primary" onclick=w("${ite.answer}")>answer</button>
                    </div>
                  </div>
        `
        render.append(div)
     })
     return render
}
const  w=(answer)=>{
alert(`${answer}`)}
con.append(render())

