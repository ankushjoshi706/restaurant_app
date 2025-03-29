# restaurant_app

Project Overview
Task
The goal is to make a real life website for a restaurant and you have to write the script for it.
Mainly 5 tasks are done when you go in a restaurant. You get the menu and then Someone takes your order. Then your order is given to the chef and the chef starts preparing it. Once food is cooked, the food is given to the waiter and the waiter gives the food to you. then you eat it and pay for it.
Make 5 functions
First function - getMenu() -> On the load of the screen run this function and In this function you'll make an call using fetch to get the food items from the JSON and show them to a user
TakeOrder() - Now assume that the user is ordering and make a functiion called TakeOrder() -This function should return a promise and shoud take 2500 milliseconds to resolve the order. in teh resolve choose any 3 burgers randomly and add them in the object.
orderPrep() - This function also returns a promise and takes 1500 milliseconds to resolve and the resolve should return {order_status:true; paid:false}
payOrder() - This function also returns a promise and tajes 1000 milliseconds to reolve and the resolve returns the object {order_status:true; paid:true}
thankyouFnc() - Once {paid:true} is received, give an alert on the screen saying thankyou for eating with us today!
You need to handle 4 promises back to back and run the last thankyou function one after the other. Use either promise chaining or async await or promise methods to do the following.
So inshort you need to handle 4 promises back to back and run the last thankyou fnc one after the other. use either promise chaining or async await or promise methods to do the following.
You are expected to replicate the same UI for the project. Remember there are 2 screens that are to be built.
Relevant Links
Figma Design- https://www.figma.com/file/nUaIMT5VuhX92Ijv9RnqBy/Food-Menu-F3?type=design&node-id=0%3A1&mode=design&t=ONTdcNWSpSY8jOHz-1
JSON- https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json

![Image](https://github.com/user-attachments/assets/0edf286a-639e-4edb-8f5b-48b55e77ad2b)

![Image](https://github.com/user-attachments/assets/a045fb01-9b91-4d1b-86ca-fe2101c4d485)
