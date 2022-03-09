class student{
    display(){
        console.log("Parent class");
    }}
    class student1 extends student{
      display1()
      {
          console.log("Child class");
      }

    }
    let s = new student1();
    s.display();
    s.display1();
