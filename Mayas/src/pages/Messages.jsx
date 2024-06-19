import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Messages(){

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              
              entry.target.classList.add('leftMessages');
             
              
            }
            else {
          
            entry.target.classList.remove('leftMessages')
           
            }
            
          })
        },
        {
          threshold: 0.5
        }
        )
        const obs = document.querySelectorAll('.leftMessages p')
       
        
        
        obs.forEach((one) => {
          observer.observe(one)
        }) 


        const observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting){
                
                entry.target.classList.add('rightMessages');
               
                
              }
              else {
            
              entry.target.classList.remove('rightMessages')
             
              }
              
            })
          },
          {
            threshold: 0.5
          }
          )
          const obs1 = document.querySelectorAll('.rightMessages p')
         
          
          
          obs1.forEach((one) => {
            observer1.observe(one)
          }) 



          const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting){     
                entry.target.classList.add('midMessages')   
              }
              else {
              entry.target.classList.remove('midMessages')
             
              }
              
            })
          },
          {
            threshold: 0.5
          }
          )
          const obs2 = document.querySelectorAll('.midMessages p')
         
          
          
          obs2.forEach((one) => {
            observer2.observe(one)
          }) 

        
    })     
    
    //The Messages
    const message1 = <p>"<b>May his gentle soul rest in peace."<br/> Engr. Sunday Ochai</b></p>
    const message2 = <p><b>"I cannot say goodbye to you Sir, but there is nothing I can do;
        I must say it. I love you so much but God loves you more. I miss you Sir.
        I know in spirit we are together. Thank you Sir and goodbye."<br/> Michael Gambo (Your Security)</b></p>
    const message3 = <p><b>"You fought so much to stay alive Sir, your love for your family shone so bright that even though I
      knew you for a short while I admired your generosity, your love for life and your intelligence. Heaven has gained a beautiful
      soul. Rest in peace Sir, till we meet to part no more. If you coul read this just know it's 'Olive' writing and there
      would be no one to call me that anymore."<br/> Nnedi Nnamdi-Nwaeze</b></p>
    const message4 = <p><b>"In memory of a mentor, a guiding light who instilled in me the power of proactivity
      and perseverance. Thank you for being a father figure and showing me how to navigate life's challenges with
      determination and foresight. Your legacy lives on in every proactive step I take."<br/> Abraham Abba Akogwu</b></p>
    const message5 = <p><b>"Engr. Mayas, you have done so much for family, friends, community at
        large. It's an appointed call time of God Almighty. Farewell IJN."<br/> Oodo Emma</b></p>
    const message6 = <p><b>"Engr, you will be missed by us at St. Gabriel's Papal Ground.
        Rest in peace.<br/> Sir Ankelio Arthur</b></p>
    const message7 = <p><b>"Rest in peace, my mentor."<br/> Engr. Idogwu Victor</b></p>
    const message8 = <p><b>On behalf of the President, Council and the entire staff of COREN we condole
        the entire family of Engr. M. U. Adoyi on his passing. May God grant him eternal rest and we pray 
        God grant you all the strength to bear his exit. Goodbye to the only Director of Engineering in COREN.
        RIP.<br/>Engr. Adisa, A. Bello; Registrar, COREN</b></p>

    const message9 = <p><b>"Okpani (Oga), may your gentle soul rest in perfect peace." <br/>Engr. Valentine Ejeh</b></p>
    const message10 = <p><b>"Engr. Mayas was a gentleman. I would personally miss him.
                      May God grant his soul eternal rest."<br/> Omale Onjeh</b></p>
    const message11 = <p><b>"On behalf of my family we are saddened to hear this news. May God rest your soul.
      Farewell brother and co-landlord."<br/>Pastor Vine Ohamme</b></p>
    const message12 = <p><b>"May your soul rest in peace, Daddy. Genesis Zion loves you and misses you daddy."<br/>Genesis Zion</b></p>
    const message13 = <p><b>"We are consoled by the fact that God prepared Brother for Heaven in his final days, which is good for all.
      May brother's soul find rest in the Lord."<br/>Bro Jude and Family</b></p>
    const message14 = <p><b>"May God grant the soul od this great man eternal rest in his Kingdom and grant the 
      family the strength to bear this loss.Amen"<br/>Swizel Technologies Limited</b></p>
    const message15 = <p><b>"May the Almighty God accept you in his kingdom. Good night my boss"<br/>Engr. Peter Awunde</b></p>
    const message16 = <p><b>"You lived a positive life amongst us in the estate. Your contributions and proactiveness
      towards the development of the estate will be missed. Rest in peace Sir."<br/>Micheal Ezeh</b></p>
    const message17 = <p><b>"My Chairman, I lack words to use; our prayers were to see you get back on your 
      feet but hearing the sadnews of your death makes me think if God does not hear prayers; but he knows
      best. May your gentle soul rest in perfect peace from this wicked world. Till we meet to part no more."<br/>Mrs. Igomi Irene</b></p>
    const message18 = <p><b>"My deepest condolence to the Adoyi family. May God grant the soul of our brother
      eternal rest and grant the family the fortitude to bear this irreparable loss"<br/>Mrs. Uzamaka Aliri</b></p>
    const message19 = <p><b>"May the Lord grant your soul eternal rest. Amen. Big uncle, we love you but God
      loves your most. Rest well. Amen"<br/>Hon. Fred Apochie</b></p>
    const message20 = <p><b>"It's hard to believe. Rest in peace Sir."<br/>Dr. Anthony E.A</b></p>
    const message21 = <p><b><br/>"We the members of St. Gabriel's community, Papal Ground are saddened by your
    passage. We pray that the Lord rest your soul in perfect peace."<br/>Sir Michael Ahidjo</b></p>
    const message22 = <p><b>"May the Lord who has called you to him at this time grant you eternal rest with him. Adieu 
       Engr. Dr. Mayas Adoyi."<br/>Alex Ubur</b></p>
    const message23 = <p><b>"You died in Christ, recieving the sacrament of the church. May you enjoy eternal 
      bliss in heaven"<br/>Fr. Ameh Sylvanus</b></p>
    return (
        <>
        <div className="messages">
            <div className = "leftMessages">
            {message1}
            {message4}
            {message6}
            {message12}
            {message9}
            {message15}
            {message19}
            {message21}
            </div>

            <div className = "midMessages">
                {message2}
                {message5}
                {message7}
                {message13}
                {message10}
                {message16}
                {message20}
                {message22}
            </div>

            <div className = "rightMessages">
                {message3}
                {message8}
                {message5}
                {message14}
                {message11}
                {message17}
                {message18}
                {message23}
            </div>
       </div>
       </>
    )
}

export default Messages