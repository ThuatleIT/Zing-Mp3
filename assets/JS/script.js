const menuTitle = document.querySelector(".content__navbar-menu");
menuTitle.addEventListener("click",function(x){
    if(x.target.classList.contains("content__navbar-item")){
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".content");
        menuItem.querySelector(".container__tab.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active")

    }
})

let image = document.getElementById('slide__auto');
let images = ['./assets/image/listSong1/song16.jpg','./assets/image/listSong1/song17.jpg','./assets/image/listSong1/song18.jpg','./assets/image/listSong1/song19.jpg','./assets/image/listSong1/song10.jpg','./assets/image/listSong1/song1.jpg','./assets/image/listSong1/song2.jpg'];
setInterval(function() {
    let random = Math.floor(Math.random()*4);
    image.src = images[random]; 
},1500)




const sidebarItem = document.querySelectorAll('.sidebar__nav-item');
const parentItem = document.querySelector('.sidebar__nav');

sidebarItem.forEach((item, index) => {
    item.addEventListener('click',() => {
      const Target = item.getAttribute('data-title');
      if(Target !== null) {

            document.querySelectorAll('.sidebar__nav-item.active').forEach(element => {
                element.classList.remove('active')
            })
            item.classList.add("active")

            document.querySelector('.app__container.active').classList.remove('active');
            document.querySelector(Target).classList.add("active")
      } else {
        createToast()

      }
    })
})

function createToast() {
    let toast = document.createElement('div');
    toast.className = 'toast'
    toast.innerHTML = `
            <i class="ti-bell"></i>
            <div class="toast-content">
                <h3>Thông báo</h3>
                <span>Tính năng hiện chưa được cập nhập!!!</span>
            </div>  
            <span class="countdown"></span>
    `
    document.querySelector('#toasts').appendChild(toast)
    setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 4000)
	setTimeout(() => {
		toast.remove()
	}, 6000)
    
}

const variable = document.querySelectorAll('.playlist__list');

    variable.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.playlist__list.active').classList.remove('active');
            item.classList.add('active')
        })
    })

    // sidebarItem.addEventListener('click', (e) => {
    //    if(e.target.classList.contains('sidebar__item-link')) {
    //         const itemTarget = e.target.getAttribute('data-title');
    //         sidebarItem.querySelector('.active').classList.remove('active')
    //         e.target.parentElement.classList.add('active')

    //        document.querySelector('.app__container.active').classList.remove('active');
    //        document.querySelector(itemTarget).classList.add('active')
    //    }
        
    // })


    const playListCTN = document.querySelectorAll('.change--container');
    const btnRight = document.querySelectorAll('.btn-right');
    const btnLeft = document.querySelectorAll('.btn-left');
    var pageXNow = 0;
    
    btnRight.forEach((item,index) => {
        item.addEventListener('click', (e) => {
            pageXNow = e.pageX + e.pageX
            playListCTN[index].scrollLeft = pageXNow;
    })
    })
       
    btnLeft.forEach((item,index) => {
        item.addEventListener('click', (e) => {
            playListCTN[index].scrollLeft =  e.pageX - pageXNow;
    })
    })    


    
    
           
        
    


    
    
