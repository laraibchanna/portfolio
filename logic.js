console.log('Script running...')
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGO')
    if(document.querySelector('.sidebar').classList.contains('sidebarGO')){
        document.querySelector('.lines').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
         document.querySelector('.cross').style.display = 'inline'
        setTimeout(() => {
              document.querySelector('.lines').style.display = 'none'
        }, 300);
             
             
        
    }

})



