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

## project 2

```javascript
const form=document.querySelector("form")

//if we take values here we will get empty values while reloading
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    //only while submitting extract values

    if(height==='' || height<0 || isNaN(height)){
      results.innerHTML=`Please give a vaid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
      results.innerHTML=`Please give a vaid weight ${weight}`;
    }
    else{
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      results.innerHTML=`<span>${bmi}</span>`
    }
})
```
