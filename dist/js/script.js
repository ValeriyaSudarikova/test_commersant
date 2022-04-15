'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //set date
    const dateParent = document.querySelectorAll('.header__time');

    setInterval(function() {
        let d = new Date(),
            hours = d.getHours(),
            minutes = d.getMinutes(),
            seconds = d.getSeconds();

        function getZero(num) {
            if (num < 10) {
                num = '0'+ num;
            } else {
                return num;
            }
        }

        getZero(hours);
        getZero(minutes);
        getZero(seconds);

        let date = '';

        date = `${hours} : ${minutes} : ${seconds}`;

        dateParent.forEach(item => item.innerHTML = date);

    }, 1000);

    //drop menu

    const menuTrigger = document.querySelector('.croups__drop .btn'),
          menuTriggerInner = document.querySelector('.croups__drop .btn .text'),
          menu = document.querySelector('.drop-menu'),
          menuLayout = document.querySelector('.footer-section'),
          menuItems = document.querySelectorAll('.drop-menu__item');

    menuTrigger.addEventListener('click', () => {
        menu.style.display = 'block';
    })

    menuItems.forEach(item => item.addEventListener('click', () => {
        let i = menuTriggerInner.innerHTML;
        menu.style.display = 'none';
        menuTriggerInner.innerHTML = item.innerHTML;
        item.innerHTML = i;
    })); 

    //accordion 

    function accordion(triggerSelector, contentSelector) {
        const accordionTrigger = document.querySelectorAll(triggerSelector),
              accordionContent = document.querySelectorAll(contentSelector);
        
        accordionTrigger.forEach((item, i) => {
            item.addEventListener('click', () => {
                if (accordionContent[i].style.display === 'block') {
                    accordionContent[i].style.display = 'none';
                } else {
                    accordionContent[i].style.display = 'block';
                }
            })
        })
    }

    accordion('.enterprise__menu-title', '.enterprise__menu');

    //drop-menu 

    function dropMenu(triggerSelector, menuSelector, menuItemSelector, triggerInnerSelector) {
        const dropMenuTrigger = document.querySelectorAll(triggerSelector),
              dropMenuContent = document.querySelectorAll(menuSelector),
              dropMenuItems = document.querySelectorAll(menuItemSelector),
              dropMenuTriggerInner = document.querySelectorAll(triggerInnerSelector);

        dropMenuTrigger.forEach((item, i) => {
            item.addEventListener('click', () => {
                dropMenuContent[i].style.display = 'block';

                dropMenuItems[i].addEventListener('click', () => {
                    let text = dropMenuTriggerInner[i].innerHTML;

                    dropMenuContent[i].style.display = 'none';
                    dropMenuTriggerInner[i].innerHTML = dropMenuItems[i].innerHTML;
                    dropMenuItems[i].innerHTML = text;
                })
                    
    
            });
        });
    }

    dropMenu('.check__drop-btn', '.check__drop-menu', '.check__drop-menu li', '.check__drop-btn .inner');

    //changing content 

    function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

        let tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsParent = document.querySelector(tabsParentSelector);
    
        function hideTabContent() {
            
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
        }
        
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', function(event) {
            const target = event.target;
            if(target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    }

    tabs('.menu__list-item', '.menu__context', '.menu__list', 'active');


});