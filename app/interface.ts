 //define object with width & color properties

 interface Config{
    color:string
     width:number
 }


 //define read only property (can't change the properties or rename)

 interface point{
    readonly x:number
     readonly y:number
 }


 //define choosable properties

 interface Config2{
    color?:string
     width?:number
 }