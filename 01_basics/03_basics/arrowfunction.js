const user={
username:"Aditya",
price:300,
welcomeMeassage:function(){
    console.log(`${this.username}, welcome to website `);
    
}
}
user.welcomeMeassage()
user.username="sam"
user.welcomeMeassage()
