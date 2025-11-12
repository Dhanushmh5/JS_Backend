#Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution code

## project 1

```Javascript
const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button)
    button.addEventListener('click',(event)=>{
      switch(event.target.id){
        case 'grey':
        case 'yellow':
        case 'blue':
        case 'white':
        case 'purple':
          body.style.backgroundColor=event.target.id;
          break;
      }

    })
})


```
