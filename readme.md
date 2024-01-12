*****small project
1)Counter App
2)Basic Props and state handling,cards with tailwind 
3)Background Color Changer
4)
---------------------------------------------------------------------------------------------------------------------------------------
interview Q>A

1)If you want to increase counter multiplr time while addition  
setCounter(Counter+1)  //it will not work, if you want to perform this activity then we have to mainatain previous state value 
 =>     
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
----------------------------------------------------------------------------------------------------------------------------------------
2)while doing routing in react should i use <a> tag or <Link> tag 
->need to use <Link> tag because only page content change we get feel of SPA, 
->But if we used <a> tag then whole page will reload 
