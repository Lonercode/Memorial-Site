import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Family(){

    
    //The Messages
    const message1 = <><h3>Adieu my Husband</h3>
    <p><b>"I was most devastated by your passing; I still am. I find myself reminiscing on moments from
        our lives. You told me a few weeks before your passing that I should pray for you to get better so that we could
        start all over again. You asked my forgiveness for the times you had hurt me and I forgave you, even before you made
        the request. I thought we would live long enough to see our grandchildren together and I looked forward to this but 
        in spite of my prayers, God had other plans. I still believe that you were not meant to die at this time but whatever 
        the reason, human or otherwise that brought about your physical demise, I am pleased to know that God's judgement awaits 
        everyone. At times when I think I am strong enough, I find myself overwhelmed by grief. I truly didn't know what to expect 
        and didn't know it would be this way but every now and then I find solace in God's word. I know that in all things I give 
        God thanks and I am confident in His will. Your love for your children and I will always be treasured. I am comforted by 
        knowing that you are in heavenly bliss. You are greatly missed.<br/>
        Rest on Mr. jolly fellow <br/>
        Rest on Mr. Guy <br/>
        Rest on Maddy A." <br/>
        <span id = "name">Mrs. Helen Adoyi</span></b></p>
        </>
    const message2 = <><h3> To Daddy</h3>
    <p><b>"I have looked at this empty page for the longest time. Not so much for a lack of words to say but the sheer density of
        of emotions have overwhelmed me to writers block. I dreaded this moment. It was looming but I had unwavering faith in your
        complete recovery. I denounced all science and logic but death dealt me a blow. Death dealt me a heavy blow! A heavy excuciating
        discourteous blow!! They say it will ease with time. Perhaps, so...I gave all I had and was prepared to give my breath if it
        would bring you back.<br/>
        Now I take comfort in the life you lived...a life of academic achievements, professional success and provider per excelence.
        I take comfort in knowing my dad is no longer in pain; that the suffering you had to endure in the tail end is no more.
        'Jesus! Jesus!' you always called out to Him and He has accepted you in one of the many rooms of His Father's mansion.
        I am grateful to you for everything. Our joy, our laughter, our sadness, our mistakes, our quarrels have morphed me into
        the man I am - a man on a mission to restore and continue your legacy. Your 'hero', 'Adah o m'einyinyi' will forever
        have you in his heart.<br/>
        I lost my Dad but only in body, not in spirit. <br/>
        I cherish your final words...they are my beam of hope. <br/>
        Until we meet again, may your gentle soul rest in peace." <br/>
        <span id = "name">Dr. Kevin Adah Adoyi</span></b></p>
    </>
    const message3 = <><h3>Much Too Painful</h3>
    <p><b>"I have been staring at the cursor on the laptop you gave me blink for a long time and I have been unable
        to type a word. This tribute is expected of me and so I have to say something when in reality I am at a loss for words;
        so much that I wish my feelings could express themselves directly on paper.<br/>
        I have been on a rollercoaster of emotions. I have been riddled with questions for God, hate for the unseen and hope
        in the afterlife. I have eyed my own life suspiciously. I have wondered how an enigmatic, charismatic,
        intelligent and kind person like you could leave this world so soon. You have always been and continue to be my idol,
        the biggest role model I hav ever had and I regret the number of times I failed to tell you this;
        I am convinced I should have let you know how much you inspired me much more than I did.
        God knows best. I had so much faith in your recovery. When God decided that was not to be the case, I struggled
        initially but I have come to believe in his mercy. You are in the glory of heaven and I am happy that
        I would meet you again. Rest in peace daddy. I miss you so much."<br/>
        <span id = "name"> Amanda Ene Adoyi </span></b></p>
    </>
    
    const message4 = <><h3>Goodnight Daddy</h3>
    <p><b>"Daddy you have left us with what I feel are questions unanswered, stones unturned, hearts in sorrow and grief.
        The pain and sorrow I watched Mummy go through would scar me forever. It feels like you were taken from us after a 
        tug-of-war. Your earthly presence isn't here to protect or guide me anymore, and instead of a legacy of your greatness,
        I find myself lost in deep despair, because of the circumstances of your passing; the long-fought battle you were strong
        enough to face until the very end. You fought much longer than you were supposed to, and I love you for that."<br/> 
        I love you for the pep-talk and advice I would receive while you took me to school when I was a child. Your guidance was
        so powerful that even in sickness you told me; 'I won't make it, love your siblings. Don't be at war with them.' I had an
        angry reaction to that, taking it as an indication of surrender. I love you for how you would show boldness 
        when dealing with issues and still find time to be your jovial, fun-loving self. I love you for your excellent 
        handwriting, your superb diction. I love you for your organization and preparedness for every situation. I love you for
        your courage in the first place, to set out from a small community of Owukpa to build a living that 
        would impact so many lives along the way.<br/>
        It was all the more depressing to witness such a capable, exceptional mind deteriorate more and more. There 
        were moments of conflict - I know that all too well, but they are meaningless on the basis of one of the last
        things you said to me despite your condition; 'I love you too'. <br/>
        With these dreams and tears that present themselves from time to time, what I know is constant is your
        never-ending love for us that we can now experience from your plane of existence.<br/>
        To your earthly presence I say Goodnighht Daddy. To you I say pray for us, bless every phase of our lives,
        every endeavor we have. Till we meet again."<br/>
        <span id = "name">Evans Abah Adoyi</span></b></p>
    </>
    const message5 = <><h3>Tribute to a Dear Deceased Brother, Engr. M.U. Adoyi, FNSE</h3>
    <p><b>"I still find it difficult to believe that you are gone. I always looked up to you as an inspiration
        and a strong pillar to the family. I cannot easily believe that you are not with me anymore. Your demise
        has made me lonely. It has created a big vacuum that only God can fill.<br/>
        It is still hard to believe that death has snatched you away from our eyes even when you fought from start
        to end with all your breath and strength. You could not help it because when Almighty God calls, no one can 
        disobey.<br/>
        It is still hard to accept the painful reality of your exit. I have never been ready for a moment like this
        because I have never thought within my wildest imagination that you would ever leave us so soon in this manner. <br/>
        Death has done its worse, nevertheless I take strength in the Divine for I know that you have gone to eternal
        rest. It is true that you have been snatched but only from our eyes as you will always keep having a place
        in our memories until we seperate no more. <br/>
        You were renowned for your selfless service to humanity and your immediate community. Dear brother, your legacies
        will always be with us. <br/>
        Rest on, brother."<br/>
        <span id = "name">Adoyi Kenneth A.</span></b></p>
   </>
    return (
        <>
        <div className="familyMessages">
            <div className = "firstMessage">
            {message1}
           
            </div>

            <div className = "secondMessage">
                {message2}
                
            </div>

            <div className = "thirdMessage">
                {message3}
                
            </div>

            
            <div className = "fourthMessage">
                {message4}
                
            </div>

            
            <div className = "fifthMessage">
                {message5}
                
            </div>
       </div>
       </>
    )
}

export default Family